select events.event_id, event_name, day, month, events.date, year, start_time, end_time, image, address, city ,state, zipcode, details, groups.date as dating, family,friends,large
from events 
join category on category.event_id = events.event_id
join groups on groups.event_id = events.event_id
where music = ${category} 
