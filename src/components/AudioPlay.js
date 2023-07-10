import React, { Component } from 'react';
import soundfile1 from '../assets/audios/sample-audio.mp3';
import soundfile2 from '../assets/audios/Sample-Listening-Multiple-Choice-One-Answer-trimmed.mp3';


class AudioPlay extends Component {
  state = {
    track: soundfile1,
    volumeRange: 0.5
  }

  componentDidMount() {
    if (this.props.pageNumber === 4) {
      this.setState({ track: soundfile2 }, () => {
        this.player.src = this.state.track;
        this.Play();
      });
    }
    this.player.src = this.state.track;
  }

  componentDidUpdate(prevProps) {
    if (this.props.pageNumber === 4 && this.props.pageNumber !== prevProps.pageNumber) {
      if (!this.state.audioPlayedOnPage4) {
        this.setState({ track: soundfile2 }, () => {
          this.Pause();
          this.player.src = this.state.track;
          this.Play();
          this.setState({ audioPlayedOnPage4: true });
        });
      }
    }
  
    if (this.props.playTestSound !== prevProps.playTestSound) {
      if (this.props.playTestSound) {
        if (!this.state.isPlaying) {
          this.Play();
        }
      } else {
        this.Pause();
      }
    }
  }
  

  handleChange = (event) => {
    this.setState({ volumeRange: event.target.value }, () => {
      this.player.volume = this.state.volumeRange;
    });
  }

  Play() {
    this.player.play();
  }

  Pause() {
    this.player.pause();
  }

  render() {
    return (
      <div className='audio-container'>
        <input
          className='slider'
          type="range" min="0" max="1" step='0.01'
          value={this.state.volumeRange}
          onChange={this.handleChange}
         />
        <audio ref={node => (this.player = node)} loop={this.props.pageNumber === 2} />
      </div>
    );
  }
}

export default AudioPlay;
