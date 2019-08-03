import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MessageComponent from '../components/MessageComponent';
import Navbarsection from '../../commons/component/Navbarsection';
import MenubarSection from '../../commons/component/Menubarsection';
import Footersection from '../../commons/component/Footer';
import fetchMessages from '../redux/actions/FetchallMessagesAction';
import '../FetchMessageStyle/main.scss';
import '../FetchMessageStyle/FetchMessageStyle.scss';


export class MessageContainer extends Component {
    constructor (props) {
        super(props);
    }
    componentDidMount () {
        const { fetchMessages } = this.props;
        fetchMessages();
    }
    render () {
        const {
            fetchErrors,
            allMessages,
            fetchMeassageFailed,
            isLoading
        } = this.props;

        return (
            <div>
                <Navbarsection props={this.props}/>
                <MenubarSection/>
                <MessageComponent
                    fetch_errors={fetchErrors}
                    messages={allMessages}
                    fetch_meassage_failed={fetchMeassageFailed}
                    isLoading={isLoading}
                />
                <Footersection/>
            </div>
        );
    }
}

MessageContainer.propTypes = {
    fetchMessages: PropTypes.func.isRequired,
    fetchErrors: PropTypes.bool.isRequired,
    allMessages: PropTypes.array,
    fetchMeassageFailed: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export const mapStateToProps = state => ({
    fetchErrors: state.fetchMessage.fetch_messages_errors,
    allMessages: state.fetchMessage.all_messages,
    fetchMeassageFailed: state.fetchMessage.fetch_meassage_failed,
    isLoading: state.fetchMessage.isLoading
});

export default connect(mapStateToProps, { fetchMessages })(MessageContainer);
