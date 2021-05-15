select "f"."firstName",
       "f"."lastName"
from "films"
join "castMembers" using ("filmId")
join "actors" as "f" using ("actorId")
where "title" = 'Jersey Sassy';
