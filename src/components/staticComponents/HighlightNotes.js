import React, { Component } from 'react';

class HighlightNotes extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      noteVisibleId : [],
      noteDragging : undefined,
      contextMenu : {
        mode : "",
        pos : {}
      },
      mouseClickPos : {},
      highlightedRegionClickedId : "",
      highlightedRegionsCounter : 0,
      highlightedRegions : []
    }
  }

  componentDidMount() {
    this.addListenerLeftClick();
    this.addListenerRightClick();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.testPageNumber !== this.state.testPageNumber) {
      // reset everything
      this.setState(  this.getInitialState() )
    }
  }

  leftClickAction = (event) => {
    var _this = this;
    var selection = window.getSelection().getRangeAt(0);
    var parentEl = selection.commonAncestorContainer.parentNode;
    if (parentEl.classList.contains("isnote")) {
      var id = parentEl.getAttribute("data-highlightedregion-id");
      var noteVisibleId = _this.state.noteVisibleId;
      var idExisting = (_this.state.noteVisibleId.filter(VisibleId => VisibleId === id).length > 0) ? true : false;
      if (!idExisting) {
        noteVisibleId.push(id);
      }
      _this.setState({ noteVisibleId });
    }
  }

  addListenerLeftClick() {
    var el = document.getElementsByClassName("content")[0];
    var el1 = document.getElementsByClassName("title")[0];

    el.addEventListener('click', this.leftClickAction );
    el1.addEventListener('click', this.leftClickAction );
  }

  rightClickAction = (event) => {
    var _this = this;
    event.preventDefault();
    var selection = window.getSelection();

    if (selection.rangeCount > 0) {
      selection = selection.getRangeAt(0);
      var endContainer = selection.endContainer;  // check start and end container to prevent cross paras and differnt tags including input highlight
      var startContainer = selection.startContainer;

      if (endContainer.wholeText === startContainer.wholeText) {
        var selectedText = selection.toString();
          var contextMenu = {
            mode:  "",
            pos: {
              top: event.clientY,
              left: event.clientX
            }
          }
          var highlightedRegionClickedId = _this.getHighlightIdFromParents(selection.commonAncestorContainer.parentNode);
          if (highlightedRegionClickedId !== "") { // they clicked on an existing element.
            contextMenu.mode = "existing"
          } else if (selectedText !== "") {
            contextMenu.mode = "new"
          }
          _this.setState({ contextMenu, highlightedRegionClickedId : highlightedRegionClickedId  });
      }
    }

    return false;
  }

  addListenerRightClick() {
    var el = document.getElementsByClassName("content")[0];
    var el1 = document.getElementsByClassName("title")[0];

    el.addEventListener('contextmenu', this.rightClickAction, false);
    el1.addEventListener('contextmenu', this.rightClickAction, false);
  }

  getHighlightIdFromParents(elem) { // traverse up the tree until you find a .highlight (and return id) or until we reach .question (and stop)
    if (elem.nodeType === 1 && !elem.classList.contains("content") && !elem.classList.contains("title") && !elem.classList.contains("App")) {
      if (elem.classList.contains("highlight")) {
        return elem.getAttribute("data-highlightedregion-id")
      } else if (elem.parentNode) {  // we're not at the ".question" element yet
        return this.getHighlightIdFromParents(elem.parentNode);
      }
    }
    return "";
  }


  dragNote_Start (event, note) {
    var noteDragging = note;
    var mouseClickPos = {
      offsetX: event.clientX - note.pos.left,
      offsetY: event.clientY - note.pos.top
    }
    this.setState({ mouseClickPos, noteDragging });
  }

  dragNote_Stop (event) {
    this.setState({ noteDragging: undefined });
  }
  dragNote_Move (event) {
    var noteDragging = this.state.noteDragging;
    if (noteDragging) {
      noteDragging.pos = {
        left: event.clientX - this.state.mouseClickPos.offsetX,
        top: event.clientY - this.state.mouseClickPos.offsetY
      };
      this.setState({ noteDragging });
    }
  }

  handleNoteClose(event, noteId) {
    var _this = this;
    var noteVisibleId = _this.state.noteVisibleId.filter(VisibleId => VisibleId !== noteId.toString());
    this.setState({ noteVisibleId });
  }

  handleNoteContentChange(event, note) {
    note.text = event.currentTarget.innerText;
    this.setState({ note });
  }

  handleContextMenuItemClick_Clear(event, clearAll) {
    var aHighlightedRegions = this.state.highlightedRegions;
    var i;
    if (clearAll) {
      aHighlightedRegions = [];
      var nodes = document.querySelectorAll(".highlight");
      for (i = 0; i < nodes.length; i++) {
        this.clearHighlight(nodes[i].getAttribute("data-highlightedregion-id"));
      }
      this.setState({ noteVisibleId: [] });
    } else {
      for (i = 0; i < aHighlightedRegions.length; i++) {
        if (aHighlightedRegions[i].id.toString() === this.state.highlightedRegionClickedId) {
          aHighlightedRegions.splice(i,1);
          this.clearHighlight(this.state.highlightedRegionClickedId);
          break;
        }
      }
      this.setState({ noteVisibleId: this.state.noteVisibleId.filter(visibleId => visibleId !== this.state.highlightedRegionClickedId) });
    }
    this.setState({ contextMenu:  { mode : ""}, highlightedRegions : aHighlightedRegions, highlightedRegionClickedId : "" })
  }

  handleContextMenuItemClick_Highlight(event) {
    this.createNewHighlightFromSelection(event);
  }

  handleContextMenuItemClick_Note(event) {
    var _this = this;
    if (this.state.highlightedRegionClickedId === "") { // it's a new note
      this.createNewHighlightFromSelection(event, true);
    } else {
      var node = document.querySelectorAll(".highlight[data-highlightedregion-id='" + this.state.highlightedRegionClickedId + "']")[0];
      node.classList.add("isnote");
      var noteVisibleId = _this.state.noteVisibleId;
      var idExisting = (_this.state.noteVisibleId.filter(VisibleId => VisibleId === this.state.highlightedRegionClickedId).length > 0) ? true : false;
      if (!idExisting) {
        noteVisibleId.push(this.state.highlightedRegionClickedId);
      }

      this.setState({ contextMenu:  { mode : "" }, noteVisibleId });
    }
  }

  createNewHighlightFromSelection(event, isNote) {
    var _this = this;
    var sNoteVisibleId = "";
    var highlightedRegions = this.state.highlightedRegions;
    var highlightedRegionsCounter = this.state.highlightedRegionsCounter;

    highlightedRegionsCounter += 1;

    // need to handle overlap
    var selection = window.getSelection().getRangeAt(0);
    var selectedText = selection.extractContents();
    var span = document.createElement("span");
    span.classList.add("highlight");
    if (isNote) {
      span.classList.add("isnote");
      sNoteVisibleId = highlightedRegionsCounter.toString();
    }
    span.setAttribute("data-highlightedregion-id", highlightedRegionsCounter);
    span.appendChild(selectedText);
    selection.insertNode(span);

    // add it to the array so we can keep track of them.
    highlightedRegions.push({
      id : highlightedRegionsCounter,
      note: {
        pos: this.state.contextMenu.pos
      }
    });

    window.getSelection().removeAllRanges();
    var noteVisibleId = _this.state.noteVisibleId;
    var idExisting = (_this.state.noteVisibleId.filter(VisibleId => VisibleId === sNoteVisibleId).length > 0) ? true : false;
    if (!idExisting) {
      noteVisibleId.push(sNoteVisibleId);
    }

    this.setState({ contextMenu : { mode : "" }, highlightedRegions, highlightedRegionsCounter, noteVisibleId });
  }

  clearHighlight(id) {
    var el = document.querySelectorAll(".highlight[data-highlightedregion-id='" + id + "']")[0];
    var parent = el.parentNode;
    while (el.firstChild) parent.insertBefore(el.firstChild, el);
    parent.removeChild(el);
  }

  handleClickOutside(event) {
    if (event.target === event.currentTarget) { // its a click on the actual element (not a child)
      this.setState({ contextMenu:  { mode : "" } })
    }
  }

  renderNotes() {
    // TODO: loop through all the notes and output them
    return (
      <div className="notes-container">
        {
          this.state.highlightedRegions.map((highlightedRegion) => {
            if (highlightedRegion.note) {

              var noteVisible = (this.state.noteVisibleId.filter(VisibleId => VisibleId === highlightedRegion.id.toString()).length > 0) ? "visible" : "";

              return (
                <div className={`note ${noteVisible}`} key={highlightedRegion.id} style={highlightedRegion.note.pos}>
                  <div className="close" onClick={(event) => this.handleNoteClose(event, highlightedRegion.id)}></div>
                  <div className="draghandle" onMouseDown={(event) => this.dragNote_Start(event, highlightedRegion.note)}></div>
                  <div className="edit">
                    <div className="mainText"
                      contentEditable="true"
                      spellCheck='false'
                      onInput={(event) => this.handleNoteContentChange(event, highlightedRegion.note)}>
                    </div>
                  </div>
                </div>
              )
            }
            return ""
          })
        }
      </div>
    )
  }

  render() {
    var cssClass = "";
    if (this.state.noteVisibleId.length > 0 || this.state.contextMenu.mode !== "") {
      cssClass += "visible ";
    }
    var contextMenuClearMode = "";
    if (this.state.contextMenu.mode === "existing" && this.state.highlightedRegions.length > 0) {
      contextMenuClearMode = (this.state.highlightedRegions.length > 1) ? "clear-all" : "clear-single"
    }

    return (
      <div className={`highlight-notes-container ${cssClass}`} onMouseDown={(event) => this.handleClickOutside(event)} onMouseUp={(event) => this.dragNote_Stop(event)} onMouseMove={(event) => this.dragNote_Move(event)} >
        <ul className={`context-menu-list mode-${this.state.contextMenu.mode} ${contextMenuClearMode}`} style={this.state.contextMenu.pos}>
          <li className="context-menu-item icon-highlight" onClick={(event) => this.handleContextMenuItemClick_Highlight(event) }><span>Highlight</span></li>
          <li className="context-menu-item icon-note" onClick={(event) => this.handleContextMenuItemClick_Note(event) }><span>Notes</span></li>
          <li className="context-menu-item icon-clear" onClick={(event) => this.handleContextMenuItemClick_Clear(event) } title="Clears this highlighting"><span>Clear</span></li>
          <li className="context-menu-item icon-clearAll" onClick={(event) => this.handleContextMenuItemClick_Clear(event, true) } title="Clears all highlighting on this page"><span>Clear all</span></li>
        </ul>
        { this.renderNotes() }
      </div>
    );
  }
}

export default HighlightNotes;
