import React, { Component } from 'react';
import './App.scss';
import './components/components.scss';
import './containers/containers.scss';
import './containers/pageContents/pageContent.scss';
import './components/staticComponents/popups.scss';
import './components/staticComponents/HighlightNotes.scss';
import Banner from './containers/Banner';
import MainContent from './containers/MainContent';

class App extends Component {
    state = {
        pageType: 'Intro',
        pageNumber: 1,
        playTestSound: false,
        testEnd: false,
    };

    setTestEnd = () => {
        this.setState({ testEnd: true });
    };

    renderNextPage = () => {
        this.setState({ pageNumber: this.state.pageNumber + 1 });
        if (this.state.pageNumber === 3) {
            this.setState({ pageType: 'Tests' });
        } else if (this.state.pageNumber === 11) {
            this.setState({ pageType: 'End' });
        }
    };

    renderPreviousPage = () => {
        this.setState({ pageNumber: this.state.pageNumber - 1 });
    };

    TestsPageJump = (page) => {
        if (page) {
            this.setState({ pageNumber: page });
        }
    };

    forceEndTest = () => {
        this.setState({ pageNumber: 4, pageType: 'End', testEnd: true });
    };

    startReviewAnswers = () => {
        this.setState({ pageNumber: 4, pageType: 'Tests' });
    };

    updatePlayTestSound = () => {
        this.setState({ playTestSound: !this.state.playTestSound });
    };

    render() {
        return (
            <div className="App">
                <Banner
                    pageType={this.state.pageType}
                    pageNumber={this.state.pageNumber}
                    forceEndTest={this.forceEndTest}
                    playTestSound={this.state.playTestSound}
                />
                <MainContent
                    pageType={this.state.pageType}
                    pageNumber={this.state.pageNumber}
                    renderNextPage={this.renderNextPage}
                    renderPreviousPage={this.renderPreviousPage}
                    updatePlayTestSound={this.updatePlayTestSound}
                    testSoundBtn={this.state.playTestSound ? 'Stop sound' : 'Play sound'}
                    TestsPageJump={this.TestsPageJump}
                    startReviewAnswers={this.startReviewAnswers}
                    testEnd={this.state.testEnd}
                    setTestEnd={this.setTestEnd}
                />
            </div>
        );
    }
}

export default App;
