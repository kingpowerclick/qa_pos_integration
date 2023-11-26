import { transaction, transaction_headerAttribute, transaction_retailLineItem, transaction_retailLineItem_lineItemDiscount, transaction_retailLineItem_lineItemDiscount_lineItemDiscountExt, transaction_retailLineItem_lineItemExt, transaction_retailLineItem_lineItemTax, transaction_tender, transaction_tender_tenderExt, transaction_tender_tenderExt_tenderAttribute, transaction_transactionExt } from './func'
import * as data_ramayana_normal_sales from '../../fixtures/data_ramayana_normal_sales.json'
import * as input_ramayana_normal_sales from '../../fixtures/input_ramayana_normal_sales.json'

describe('Verify mapping data normal sales', () => {
    const data = data_ramayana_normal_sales.TRANSACTION
    const input = input_ramayana_normal_sales.TRANSACTION

    it('Verify transaction', () => {
        transaction(data, input)
    })

    it('Verify transaction_transactionExt', () => {
        transaction_transactionExt(data.TRANSACTIONEXT, input.TRANSACTIONEXT)
    })

    it('Verify transaction_headerAttribute', () => {
        transaction_headerAttribute(data.HEADERATTRIBUTE, input.HEADERATTRIBUTE)
    })

    it('Verify transaction_retailLineItem', () => {
        transaction_retailLineItem(data.RETAILLINEITEM, input.RETAILLINEITEM)
    })

    it('Verify transaction_retailLineItem_lineItemExt', () => {
        transaction_retailLineItem_lineItemExt(data.RETAILLINEITEM, input.RETAILLINEITEM)
    })

    it('Verify transaction_retailLineItem_lineItemDiscount', () => {
        transaction_retailLineItem_lineItemDiscount(data.RETAILLINEITEM, input.RETAILLINEITEM)
    })

    it('Verify transaction_retailLineItem_lineItemDiscount_lineItemDiscountExt', () => {
        transaction_retailLineItem_lineItemDiscount_lineItemDiscountExt(data.RETAILLINEITEM, input.RETAILLINEITEM)
    })

    it('Verify transaction_retailLineItem_lineItemTax', () => {
        transaction_retailLineItem_lineItemTax(data.RETAILLINEITEM, input.RETAILLINEITEM)
    })

    it('Verify transaction_tender', () => {
        transaction_tender(data.TENDER, input.TENDER)
    })

    it('Verify transaction_tender_tenderExt', () => {
        transaction_tender_tenderExt(data.TENDER, input.TENDER)
    })

    it('Verify transaction_tender_tenderExt_tenserAttribute', () => {
        transaction_tender_tenderExt_tenderAttribute(data.TENDER, input.TENDER)
    })







})
