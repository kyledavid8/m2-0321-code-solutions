select "a"."line1",
       "c"."name",
       "a"."district"
from "addresses" as "a"
join "cities" as "c" using ("cityId");
