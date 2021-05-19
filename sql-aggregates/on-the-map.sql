select "k"."name", count("c"."countryId")
from "countries" as "k"
join "cities" as "c" using ("countryId")
group by "k"."name";
