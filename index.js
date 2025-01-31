/**
 * @providesModule RNStartActivityForFdk
 */

import { NativeModules } from "react-native";
var RNStartActivityForFdk = NativeModules.RNStartActivityForFdk || {};

var startActivityForFdk = (
    key, uri, action, cardCashSe, delngSe, total, 
    vat, taxxpt, instlmtMonth, callbackAppUr, 
    aditInfo, srcConfmNo, srcConfmDe, barcodeNum,
    cashNum, trmnlno, prdctNo, bizNo, uscMuf, REFERENCE_NO,
    KakaoDiscount, KakaoPayType, PaycoDiscount, PaycoPayType, cupDeposit) => {
    
    return RNStartActivityForFdk.startActivityForFdk(
        key, uri, action, cardCashSe, delngSe, total, vat, taxxpt, 
        instlmtMonth, callbackAppUr, aditInfo, srcConfmNo, srcConfmDe, barcodeNum,
        cashNum, trmnlno, prdctNo, bizNo, uscMuf, REFERENCE_NO,
        KakaoDiscount, KakaoPayType, PaycoDiscount, PaycoPayType, cupDeposit
    );
};

export default startActivityForFdk;