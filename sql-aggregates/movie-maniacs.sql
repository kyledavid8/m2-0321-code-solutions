select "c"."firstName","c"."lastName", sum("p"."amount")
from "customers" as "c"
join "payments" as "p" using ("customerId")
group by "c"."customerId"
order by sum("p"."amount") desc;
