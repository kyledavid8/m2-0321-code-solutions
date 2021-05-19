select "c"."name", count("fc"."categoryId")
from "actors" as "a"
join "castMembers" using ("actorId")
join "filmCategory" as "fc" using ("filmId")
join "categories" as "c" using ("categoryId")
where "a"."firstName" = 'Lisa'
and "a"."lastName" = 'Monroe'
group by "c"."name";
