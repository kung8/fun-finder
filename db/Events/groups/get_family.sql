select events.event_id, event_name, day, month, events.date, year, start_time, end_time, image, address, city ,state, zipcode, details
from events 
join groups on groups.event_id = events.event_id
where family = ${group} and events.event_id = ${id}