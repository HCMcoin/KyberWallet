import React from "react"
import { connect } from "react-redux"


import { Selector } from "../CommonElements"
import {Modal} from "../../components/CommonElement"

import { getTranslate } from 'react-localize-redux';
import * as marketActions from "../../actions/marketActions"


@connect((store) => {
    return {
        translate: getTranslate(store.locale),
        isOpen: store.market.configs.isShowTradingChart,
        selectedSymbol: store.market.configs.selectedSymbol
    }
})


export default class TradingView extends React.Component {

    closeModal = () => {
        this.props.dispatch(marketActions.hideTradingViewChart())
    }

    content = () => {
        return (
            <div>Test example</div>
        )
    }

    render() {
        return (
            <Modal
                    className={{
                    base: 'reveal large',
                    afterOpen: 'reveal large'
                    }}
                    isOpen={this.props.isOpen}
                    onRequestClose={this.closeModal}
                    contentLabel="trading view modal"
                    content={this.content()}
                    size="large"
                />
        )
    }
}
