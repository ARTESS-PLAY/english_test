import React, { Component } from 'react';
import Logo from '../assets/images/IELTSlogo.png';
import ParntersImage from '../assets/images/IELTSpartners.jpg';
import Button from '../components/Button';
import Timer from '../components/Timer';
import AudioPlay from '../components/AudioPlay';
import HideButtonPopup from '../components/staticComponents/HideButtonPopup';
import HelpButtonPopup from '../components/staticComponents/HelpButtonPopup';

class Banner extends Component {
    state = {
        showHidePopup: false,
        showHelpPopup: false,
    };

    toggleHidePopup = () => {
        this.setState({ showHidePopup: !this.state.showHidePopup });
    };

    toggleHelpPopup = () => {
        this.setState({ showHelpPopup: !this.state.showHelpPopup });
    };

    render() {
        const { pageType, pageNumber, playTestSound } = this.props;
        const renderHelpItems = (
            <ul>
                {pageNumber !== 1 && pageNumber !== 2 && <li>XXXX XXXXXXX - 123456</li>}
                {pageType !== 'Intro' && (
                    <li>
                        <Timer startingMin={30} forceEndTest={this.props.forceEndTest} />
                    </li>
                )}
                {pageType !== 'Intro' && pageType !== 'End' && (
                    <li>
                        <Button btnText="Help" handleClick={this.toggleHelpPopup} />
                        <Button btnText="Hide" handleClick={this.toggleHidePopup} />
                    </li>
                )}
            </ul>
        );

        const helpContainerClass =
            pageType === 'End' ? 'help-container end-page' : 'help-container';

        return (
            <div className="banner black">
                {this.props.pageType === 'Intro' && (
                    <div className="logo-container">
                        <img src={Logo} alt="Logo" />
                        <img src={ParntersImage} alt="Parnters" />
                    </div>
                )}
                <div className={helpContainerClass}>
                    {renderHelpItems}
                    {pageNumber !== 1 && pageNumber !== 12 && (
                        <AudioPlay pageNumber={pageNumber} playTestSound={playTestSound} />
                    )}
                </div>
                {this.state.showHelpPopup && (
                    <HelpButtonPopup
                        pageNumber={pageNumber - 3}
                        toggleHelpPopup={this.toggleHelpPopup}
                        showHelpPopup={this.state.showHelpPopup}
                    />
                )}
                {this.state.showHidePopup && (
                    <HideButtonPopup
                        toggleHidePopup={this.toggleHidePopup}
                        showHidePopup={this.state.showHidePopup}
                    />
                )}
            </div>
        );
    }
}

export default Banner;
