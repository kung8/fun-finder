select events.event_id, event_name, day, month, date, year, start_time, end_time, image, address, city ,state, zipcode, details
from events 
join category on category.event_id = events.event_id
where art = ${category} 