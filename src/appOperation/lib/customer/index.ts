import {AppOperation} from './../../index';
import {CUSTOMER_TYPE} from '../../types';
// import { UpdateProfileProps } from "../../../slices/loginServices/authSliceTypes";

export default (appOperation: AppOperation) => ({
  // log_out: () => appOperation.post('logout', {}, CUSTOMER_TYPE),

  get_profile: () => appOperation.post('get-profile', {}, CUSTOMER_TYPE),

  // get_portfolio_performance: () =>
  //   appOperation.post('get-portfolio-performance', {}, CUSTOMER_TYPE),

  // get_wallet: () => appOperation.post('get-wallet', {}, CUSTOMER_TYPE),

  // get_Trending_Index: () =>
  //   appOperation.post('get-trending-index', {}, CUSTOMER_TYPE),

  // get_news: value =>
  //   appOperation.post(`get-news/${value ? value : ''}`, {}, CUSTOMER_TYPE),

  // get_indexes: type =>
  //   appOperation.post(`get-indexes/${type ? type : ''}`, {}, CUSTOMER_TYPE),

  // get_index_coins: id =>
  //   appOperation.post(`get-index-coins/${id ? id : ''}`, {}, CUSTOMER_TYPE),

  // get_portfolio_details: id =>
  //   appOperation.post(
  //     `get-portfolio-details/${id ? id : ''}`,
  //     {},
  //     CUSTOMER_TYPE,
  //   ),

  // get_portfolio_data: id =>
  //   appOperation.post(`get-portfolio-data/${id ? id : ''}`, {}, CUSTOMER_TYPE),

  // get_strategy_view: (type, id) =>
  //   appOperation.post(
  //     `get-strategy-view/${type ? type : ''}/${id ? id : ''}`,
  //     {},
  //     CUSTOMER_TYPE,
  //   ),

  // get_portfolio: () => appOperation.post('get-portfolio', {}, CUSTOMER_TYPE),

  // get_transactions: currentPage =>
  //   appOperation.post(`get-transactions/${currentPage} `, {}, CUSTOMER_TYPE),

  // get_activities: () => appOperation.post('get-activities', {}, CUSTOMER_TYPE),

  // get_ticket: () => appOperation.post('get-ticket', {}, CUSTOMER_TYPE),

  // get_ticket_category: () =>
  //   appOperation.post('get-ticket-category', {}, CUSTOMER_TYPE),

  // get_affiliate_index_bonus: () =>
  //   appOperation.post('get-affiliateIndexBonus', {}, CUSTOMER_TYPE),

  // get_tier_bonus: () => appOperation.post('get-tierbonus', {}, CUSTOMER_TYPE),

  // get_bank_deposit_details: () =>
  //   appOperation.post('get-bank-deposit-details', {}, CUSTOMER_TYPE),

  // get_direct_report: () =>
  //   appOperation.post('get-directreport', {}, CUSTOMER_TYPE),
});
