UPDATE preorders SET paid = 1, pay_method = 'cash' WHERE status = 'оплачено'  // 25 STR WAS AFFECTED
SELECT name, comics_name, price, count, CONVERT(date, 101) FROM `preorders` WHERE paid = 1

SELECT name, comics_name, price, count, (price * count) as total_sum, date FROM `preorders` WHERE paid = 1

SELECT name, comics_name, price, count, (price * count) as total_sum, DATE_FORMAT(FROM_UNIXTIME(`date`), '%d-%m-%Y') as "order_date" FROM `preorders` WHERE paid = 1 ORDER BY comics_name;

SELECT CAST('2018-10-05 00:00:00' as DATE);
SELECT DATE_FORMAT(FROM_UNIXTIME(`date`), '%d-%m-%Y') as "Date" FROM `preorders`



SELECT id, name, comics_name, price, count, (price * count) as total_sum, status, DATE_FORMAT(FROM_UNIXTIME(`date`), '%d-%m-%Y') as "order_date" FROM `preorders` WHERE paid = 1 ORDER BY comics_name;

SELECT id, name, comics_name, price, count, (price * count) as total_sum, paid, pay_method, DATE_FORMAT(FROM_UNIXTIME(`date`), '%d-%m-%Y') as "order_date" FROM `preorders` WHERE paid = 1 ORDER BY comics_name;

`liqpay_status` = 'оплачено картою'

SELECT id, name, comics_name, count, price, paid, pay_method, DATE_FORMAT(FROM_UNIXTIME(`date`), '%d-%m-%Y') as "order_date" FROM `preorders` WHERE paid = 1 AND pay_method = 'card' ORDER BY id ASC

-- sum 

SELECT SUM(price) FROM `preorders` WHERE paid = 1 AND pay_method = 'card'



-- 
SELECT id, name, comics_name, count, price, pay_method, DATE_FORMAT(FROM_UNIXTIME(`date`), '%d-%m-%Y') as "order_date" FROM `preorders` WHERE paid = 1 AND pay_method = 'card' AND id > 385 ORDER BY id ASC