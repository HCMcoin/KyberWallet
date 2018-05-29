import React from "react"
import { Modal } from "../../components/CommonElement"

const ImportAccountView = (props) => {
  var contentRender = (
    <div id="import-account">
      <div class="frame">
        <div className="row">
          <div class="column small-11 large-12 small-centered" id="import-acc">
            <h1 class="title">{props.translate("address.import_address") || "Import address"}</h1>
            <h3 class="sub-title">{props.translate("address.exchange_from") || "Exchange from"}</h3>
            <div class="row import-account">
              <div class="small-6 medium-4 large-2dot4 column">
                {props.firstKey}
              </div>

              <div class="small-6 medium-4 large-2dot4 column">
                {props.secondKey}
              </div>
              <div class="small-6 medium-4 large-2dot4 column">
                {props.thirdKey}
              </div>

              <div class="small-6 medium-4 medium-offset-2 large-2dot4 large-offset-0 column">
                {props.fourthKey}
              </div>
              
              <div class="small-6 small-offset-3 medium-4 medium-offset-0 large-2dot4 large-offset-0 column end">
                {props.fifthKey}
              </div>

            </div>
          </div>
        </div>
        {props.errorModal}
      </div>
    </div>
  )

  return <Modal
  className={{
    base: 'reveal large',
    afterOpen: 'reveal large import-account-modal'
  }}
  isOpen={props.isOpen}
  onRequestClose={props.closeModal}
  contentLabel="import modal"
  content={contentRender}
  size="medium"
/>

}

export default ImportAccountView