<template>
  <section class="prompt-body">
    <div class="prompt-main" v-if="locked">
      <div class="signature-title">
        <span class="title">{{languages.title.locked}}</span>
      </div>
      <section class="prompt-actions">
        <el-button class="cancel-btn text-center" @click="denied">{{languages.button.reject}}</el-button>
        <el-button
          class="confirm-btn text-center"
          type="primary"
          @click="denied"
        >{{languages.button.confirm}}</el-button>
      </section>
    </div>
    <div class="prompt-main" v-else>
      <div class="signature-title">
        <span class="title">{{languages.title.signature}}</span>
        <span class="signature-user">{{cocosAccount.accounts}}</span>
      </div>
      <div class="signature-info" v-if="prompt.data.type === 'signature'">
        <div class="info">
          <div class="info-label">{{languages.label.ptsite}}</div>
          <div class="info-content">{{prompt.data.domain}}</div>
        </div>
        <div class="info">
          <div class="info-label">{{languages.label.ptaddress}}</div>
          <div class="info-content">
            <span>{{prompt.data.payload.toAccount}}</span>
          </div>
        </div>
        <div class="info">
          <div class="info-label">{{languages.label.ptamount}}</div>
          <div class="info-content">
            <span>{{prompt.data.payload.amount}} {{prompt.data.payload.assetId}} ({{languages.title.test}})</span>
          </div>
        </div>
        <div class="info">
          <div class="info-label">{{languages.label.memo}}</div>
          <div class="info-content">
            <span>{{prompt.data.payload.memo}}</span>
          </div>
        </div>
        <div class="info" v-if="fee">
          <div class="info-label">{{languages.label.charge}}</div>
          <div class="info-content">
            <span>{{fee}} COCOS({{languages.title.test}})</span>
          </div>
        </div>
      </div>
      <div class="signature-info" v-if="prompt.data.type === 'callContract'">
        <div class="info">
          <div class="info-label">{{languages.label.ptsite}}</div>
          <div class="info-content">{{prompt.data.domain}}</div>
        </div>
        <div class="info">
          <div class="info-label">{{languages.label.contract}}</div>
          <div class="info-content">{{prompt.data.payload.nameOrId}}</div>
        </div>
        <div class="info">
          <div class="info-label">{{languages.label.operation}}</div>
          <div class="info-content">{{prompt.data.payload.functionName}}</div>
        </div>
        <div class="info">
          <div class="info-label">{{languages.label.param}}</div>
          <div class="info-content">{{prompt.data.payload.valueList}}</div>
        </div>
        <div class="info" v-if="fee">
          <div class="info-label">{{languages.label.charge}}</div>
          <div class="info-content">
            <span>{{fee}} COCOS({{languages.title.test}})</span>
          </div>
        </div>
      </div>
      <div
        class="signature-info"
        v-if="prompt.data.type === 'fillNHAssetOrder' || prompt.data.type === 'cancelNHAssetOrder'"
      >
        <div class="info">
          <div class="info-label">{{languages.label.ptsite}}</div>
          <div class="info-content">{{prompt.data.domain}}</div>
        </div>
        <div class="info">
          <div class="info-label">{{languages.label.orderID}}</div>
          <div class="info-content">{{prompt.data.payload.orderId}}</div>
        </div>
        <div class="info" v-if="fee">
          <div class="info-label">{{languages.label.charge}}</div>
          <div class="info-content">
            <span>{{fee}} COCOS({{languages.title.test}})</span>
          </div>
        </div>
      </div>
      <div class="signature-info" v-if="prompt.data.type === 'transferNHAsset'">
        <div class="info">
          <div class="info-label">{{languages.label.ptsite}}</div>
          <div class="info-content">{{prompt.data.domain}}</div>
        </div>
        <div class="info">
          <div class="info-label">{{languages.label.ptaddress}}</div>
          <div class="info-content">{{prompt.data.payload.toAccount}}</div>
        </div>
        <div class="info">
          <div class="info-label">{{languages.label.nhId}}</div>
          <div class="info-content">{{prompt.data.payload.NHAssetIds}}</div>
        </div>
        <div class="info" v-if="fee">
          <div class="info-label">{{languages.label.charge}}</div>
          <div class="info-content">
            <span>{{fee}} COCOS({{languages.title.test}})</span>
          </div>
        </div>
      </div>
      <div class="signature-info" v-if="prompt.data.type === 'creatNHAssetOrder'">
        <div class="info">
          <div class="info-label">{{languages.label.ptsite}}</div>
          <div class="info-content">{{prompt.data.domain}}</div>
        </div>
        <div class="info">
          <div class="info-label">{{languages.label.nhId}}</div>
          <div class="info-content">{{prompt.data.payload.NHAssetId}}</div>
        </div>
        <div class="info">
          <div class="info-label">{{languages.label.orderPrice}}</div>
          <div class="info-content">{{prompt.data.payload.price}}({{languages.title.test}})</div>
        </div>
        <div class="info">
          <div class="info-label">{{languages.label.coin}}</div>
          <div class="info-content">{{prompt.data.payload.priceAssetId}}({{languages.title.test}})</div>
        </div>
        <div class="info">
          <div class="info-label">{{languages.label.orderTime}}</div>
          <div class="info-content">{{prompt.data.payload.expiration}}</div>
        </div>
        <div class="info">
          <div class="info-label">{{languages.label.memo}}</div>
          <div class="info-content">{{prompt.data.payload.memo}}</div>
        </div>
        <div class="info" v-if="fee">
          <div class="info-label">{{languages.label.charge}}</div>
          <div class="info-content">
            <span>{{fee}} COCOS({{languages.title.test}})</span>
          </div>
        </div>
      </div>
      <el-checkbox class="join-option" v-model="joinWhiteList">{{languages.message.joinWhiteList}}</el-checkbox>
      <section class="prompt-actions">
        <el-button class="cancel-btn text-center" @click="denied">{{languages.button.reject}}</el-button>
        <el-button
          class="confirm-btn text-center"
          type="primary"
          @click.once="creatNHOrder"
          v-if="prompt.data.type === 'creatNHAssetOrder'"
        >{{languages.button.confirm}}</el-button>
        <el-button
          class="confirm-btn text-center"
          type="primary"
          v-if="prompt.data.type === 'fillNHAssetOrder'"
          @click.once="fillNHAsset"
        >{{languages.button.confirm}}</el-button>
        <el-button
          class="confirm-btn text-center"
          type="primary"
          v-if="prompt.data.type === 'cancelNHAssetOrder'"
          @click.once="cancelNHAsset"
        >{{languages.button.confirm}}</el-button>
        <el-button
          class="confirm-btn text-center"
          type="primary"
          v-if="prompt.data.type === 'callContract'"
          @click.once="contractAccept"
        >{{languages.button.confirm}}</el-button>
        <el-button
          class="confirm-btn text-center"
          type="primary"
          v-if="prompt.data.type === 'signature'"
          @click.once="accepted"
        >{{languages.button.confirm}}</el-button>
        <el-button
          class="confirm-btn text-center"
          type="primary"
          v-if="prompt.data.type === 'transferNHAsset'"
          @click.once="transferNH"
        >{{languages.button.confirm}}</el-button>
      </section>
    </div>
  </section>
</template>
<script>
// import PerfectScrollbar from "perfect-scrollbar";
import { mapState, mapActions, mapMutations } from "vuex";
import NotificationService from "../../../services/NotificationService";
import utils from "../../../lib/utils";
import IdGenerator from "../../../lib/IdGenerator";
import I18n from "../../languages";
import CommonJs from "../../config/common";
export default {
  data() {
    return {
      property: null,
      json: null,
      contract: null,
      data: {},
      joinWhiteList: false,
      locked: true,
      joinContractWhiteList: false,
      joinNHAssetWhiteList: false,
      languages: {},
      fee: ""
    };
  },
  computed: {
    ...mapState(["cocosAccount"]),
    ...mapState("wallet", ["prompt"]),
    ...mapState("trans", ["tranferInfo"])
  },
  created() {
    this.languages = CommonJs.getI18nMessages(I18n);
    // this.data = this.prompt.data;
    // this.data = this.prompt.data.signedTransaction.raw_data.contract[0]
  },
  mounted() {
    this.loadingBCXAccount().then(res => {
      this.locked = res && res.locked ? true : false;
      if (!this.locked && this.prompt.data.type === "signature") {
        this.setAccount({
          toAccount: this.prompt.data.payload.toAccount,
          coin: this.prompt.data.payload.assetId,
          amount: this.prompt.data.payload.amount,
          memo: this.prompt.data.payload.memo
        });
        this.tranferBCXFree().then(res => {
          if (res.code === 1) {
            this.fee = res.data.fee_amount;
          }
        });
      } else if (!this.locked && this.prompt.data.type === "callContract") {
        this.callContractFunctionFree(this.prompt.data.payload).then(res => {
          if (res.code === 1) {
            this.fee = res.data.fee_amount;
          }
        });
      }
    });
    // this.$nextTick(() => {
    //   this.property = new PerfectScrollbar("#property");
    // });
  },
  methods: {
    ...mapMutations("wallet", [
      "addWhiteList",
      "addContractWhiteList",
      "addNHOrderWhiteList"
    ]),
    ...mapActions("wallet", ["pushPrompt"]),
    ...mapMutations("trans", ["setAccount"]),
    ...mapActions("trans", [
      "tranferBCX",
      "tranferBCXFree",
      "queryTranferRate",
      "callContractFunction",
      "creatNHAssetOrder",
      "callContractFunctionFree",
      "fillNHAssetOrder",
      "cancelNHAssetOrder",
      "transferNHAsset"
    ]),
    ...mapActions(["decodeMemo"]),
    ...mapActions("account", ["loadingBCXAccount"]),
    denied() {
      this.prompt.responder(null);
      NotificationService.close();
    },
    creatNHOrder() {
      this.addWhite();
      this.creatNHAssetOrder(this.prompt.data.payload)
        .then(res => {
          this.prompt.responder({ accepted: true, res: res });
          NotificationService.close();
        })
        .catch(err => {
          this.prompt.responder({ accepted: true, res: err });
          NotificationService.close();
        });
    },
    transferNH() {
      this.addWhite();
      this.transferNHAsset(this.prompt.data.payload)
        .then(res => {
          this.prompt.responder({ accepted: true, res: res });
          NotificationService.close();
        })
        .catch(err => {
          this.prompt.responder({ accepted: true, res: err });
          NotificationService.close();
        });
    },
    contractAccept() {
      this.addWhite();
      this.callContractFunction(this.prompt.data.payload)
        .then(res => {
          this.prompt.responder({ accepted: true, res: res });
          NotificationService.close();
        })
        .catch(err => {
          this.prompt.responder({ accepted: true, res: err });
          NotificationService.close();
        });
    },
    cancelNHAsset() {
      this.addWhite();
      this.cancelNHAssetOrder(this.prompt.data.payload)
        .then(res => {
          this.prompt.responder({ accepted: true, res: res });
          NotificationService.close();
        })
        .catch(err => {
          this.prompt.responder({ accepted: true, res: err });
          NotificationService.close();
        });
    },
    fillNHAsset() {
      this.addWhite();
      this.fillNHAssetOrder(this.prompt.data.payload)
        .then(res => {
          this.prompt.responder({ accepted: true, res: res });
          NotificationService.close();
        })
        .catch(err => {
          this.prompt.responder({ accepted: true, res: err });
          NotificationService.close();
        });
    },
    accepted() {
      this.addWhite();
      this.tranferBCX()
        .then(res => {
          this.prompt.responder({ accepted: true, res: res });
          NotificationService.close();
        })
        .catch(err => {
          this.prompt.responder({ accepted: true, res: err });
          NotificationService.close();
        });
      // const transaction = this.prompt.data.signedTransaction;
      // if (this.joinWhiteList && this.data.type === "TriggerSmartContract") {
      // this.prompt.responder({ accepted: true });
      // NotificationService.close();
    },
    addressFromHex(address) {
      return utils.transformAddress(address);
    },
    addWhite() {
      if (this.joinWhiteList) {
        // 加入白名单
        let white = {
          id: IdGenerator.numeric(24),
          domain: this.prompt.domain,
          address: this.cocosAccount.accounts,
          createTime: this.$moment().format("x")
        };
        this.addWhiteList(white);
      }
    },
    getAmount() {
      let amount = 0;
      let cname = "COCOS";
      if (this.data.type === "TransferContract") {
        amount = utils.getTokenAmount(this.data.parameter.value.amount || 0);
      } else if (this.data.type === "TransferAssetContract") {
        amount = this.data.parameter.value.amount || 0;
        cname = utils.toUtf8(this.data.parameter.value.asset_name || "");
      } else if (this.data.type === "TriggerSmartContract") {
        amount = utils.getTokenAmount(
          this.data.parameter.value.call_value || 0
        );
      }
      return amount + "  " + cname;
    },
    getFormatValue(key, value) {
      switch (key) {
        case "owner_address":
        case "to_address":
        case "contract_address":
          value = this.addressFromHex(value);
          break;
        case "asset_name":
          value = utils.toUtf8(value);
          break;
        default:
          break;
      }
      return key + " : " + value;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../styles/prompt";
.join-option {
  position: absolute;
  bottom: 20px;
}
</style>
