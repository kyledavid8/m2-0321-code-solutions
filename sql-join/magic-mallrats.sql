select "c"."firstName",
       "c"."lastName"
from "films"
join "inventory" using ("filmId")
join "rentals" using ("inventoryId")
join "customers" as "c" using ("customerId");
