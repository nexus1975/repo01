select 0 as r,0 as c,
       workingname as name,
       substr(duedate,1,10) as duedate,
       department,
  from products p 
 where p.status < 9
   and name not like '[T%'
   and exists (select null from tasks t where t.product = p.id and t.status in (0,2,3,4,9,10))
















---temp
/*
create table products_matrix (
    id,
    product_id,
    r,
    c,
    createdat,
    createdby,
    modifiedat,
    modifiedby
)
*/
