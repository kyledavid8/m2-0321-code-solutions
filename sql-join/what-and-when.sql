select "f"."releaseYear",
       "cc"."name"
from "films" as "f"
join "filmCategory" using ("filmId")
join "categories" as "cc" using ("categoryId")
where "title" = 'Boogie Amelie';
