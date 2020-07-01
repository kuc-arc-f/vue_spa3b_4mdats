/* LibMdats */

//import Dexie from 'dexie';
import LibCommon from '@/libs/LibCommon';

//
export default {
    get_const: function(){
        return {
            DB_NAME: "mdats_idx_kuc_db",
            DB_VERSION: 1,
            DB_STORE: {
                mdats: '++id, m_date, hnum, lnum ,created_at',
            }
        }
    },
    convert_items: function(items){
        var data =[]
        items.forEach(function(item){
            var m_date = LibCommon.formatDate(item.m_date, 'YYYY-MM-DD')
            item.m_date = m_date
//console.log(item.m_date )
            data.push(item)                        
        });        
        return data
    },
    get_before_month: function(date_str){
        var date = new Date(date_str);
        date.setMonth( date.getMonth() -1);
        return date
    },
    get_after_month: function(date_str){
        var date = new Date(date_str);
        date.setMonth( date.getMonth() +1);
        return date
    },
}
