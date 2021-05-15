select "p"."amount" as  "amount",
       "c"."firstName" as "firstName",
       "c"."lastName" as "lastName"
from "payments" as "p"
join "customers" as "c" using ("customerId")
order by "p"."amount" desc
limit 10;
