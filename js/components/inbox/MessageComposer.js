import React, { Component, PropTypes } from 'react';
import Trash from '../../components/icons/Trash';

export default class MessageComposer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return this.props.isComposing && (
      <div className="message-composer">
        <div className="message-composer-header">
          New Message
        </div>
        <div className="message-composer-body">
          <form>
            <label htmlFor="to">
              To
              <input type="text" name="to" />
            </label>
            <label htmlFor="from">
              From
              <input type="text" name="from" />
            </label>
            <div className="message-subject">
              <input type="text" name="subject" placeholder="Subject" />
            </div>
            <div className="message-body">
              <textarea type="text" name="body" />
            </div>
          </form>
        </div>
        <div className="message-composer-footer">
          <button className="message-composer-send-button">
            Send
          </button>
          <Trash />
        </div>
      </div>
    );
  }
}

MessageComposer.propTypes = {
  isComposing: PropTypes.bool,
};

MessageComposer.defaultProps = {
  isComposing: true,
};