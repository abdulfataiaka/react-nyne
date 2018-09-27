import React, { Component } from 'react';

/**
 * 
 * 
 * @description InfoModal Component
 * 
 * @name InfoModal
 * 
 * @returns { JSX }
 */
class InfoModal extends Component {

  constructor(props) {
    super(props);
  }

  okClick = () => {
    this.props.close();
  }

  render() {
    const { message } = this.props;
    
    return (
      <div id="info-modal" className="modal-content">
        <div className="message">
          { message }
        </div>
        <div>
          <button
            className="btn-unstyled"
            type="button"
            onClick={this.okClick}
          >
            OK
          </button>
        </div>
      </div>
    );
  }
}

export default InfoModal;
