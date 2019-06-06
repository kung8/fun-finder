module.exports = {
    getAllEvents: async (req, res) => {
        const db = req.app.get('db')
        let events = await db.Events.get_all_events()

        let newDate = new Date()
        let date = newDate.getDate()
        let month = newDate.getMonth()
        let year = newDate.getFullYear()

        events = events.filter(event => {
            return +event.year >= year
        }).filter(event => {
            if (+event.year === year) {
                return +event.month >= month
            }
        }).filter(event => {
            if (+event.month === month) {
                return +event.date >= date
            }
        })

        events = events.sort((a,b)=>{
            return new Date((`${a.month}/${a.date}/${a.year}`)) - new Date((`${b.month}/${b.date}/${b.year}`))
        })

        events.map(event => {
            let startTime = event.start_time
            let startBegin = startTime.substring(0, 2)
            let startEnd = startTime.substring(3, 5)
            let endTime = event.end_time
            let endBegin = endTime.substring(0, 2)
            let endEnd = endTime.substring(3, 5)
            if (startBegin > 12) {
                startBegin -= 12;
                startTime = startBegin + ':' + startEnd + ' PM'
                event.start_time = startTime
            } else if (startBegin == 12) {
                startTime = startBegin + ':' + startEnd + ' PM'
                event.start_time = startTime
            }
            else {
                if (startBegin < 10) {
                    startBegin = startTime.substring(1, 2)
                }
                startTime = startBegin + ':' + startEnd + ' AM'
                event.start_time = startTime
            }

            if (endBegin > 12) {
                endBegin -= 12;
                endTime = endBegin + ':' + endEnd + ' PM'
                event.end_time = endTime
            } else if (endBegin == 12) {
                endTime = endBegin + ':' + endEnd + ' PM'
                event.end_time = endTime
            }
            else {
                if (endBegin < 10) {
                    endBegin = endTime.substring(1, 2)
                }
                endTime = endBegin + ':' + endEnd + ' AM'
                event.end_time = endTime
            }

            return event
        }).map(event => {
            if (+event.month === 0) {
                return event.month = 'January'
            } else if (+event.month === 1) {
                return event.month = 'February'
            } else if (+event.month === 2) {
                return event.month = 'March'
            } else if (+event.month === 3) {
                return event.month = 'April'
            } else if (+event.month === 4) {
                return event.month = 'May'
            } else if (+event.month === 5) {
                return event.month = 'June'
            } else if (+event.month === 6) {
                return event.month = 'July'
            } else if (+event.month === 7) {
                return event.month = 'August'
            } else if (+event.month === 8) {
                return event.month = 'September'
            } else if (+event.month === 9) {
                return event.month = 'October'
            } else if (+event.month === 10) {
                return event.month = 'November'
            } else if (+event.month === 11) {
                return event.month = 'December'
            }
        })
        res.status(200).send(events)
    },

    getEvents: async (req, res) => {
        const db = req.app.get('db')
        const { order, category, group, day, time, search } = req.query
        let newDate = new Date()
        let date = newDate.getDate()
        let month = newDate.getMonth()
        let year = newDate.getFullYear()

        let events
        if (category === 'music') {
            events = await db.Events.category.get_music({ category: true })
        } else if (category === 'sports') {
            events = await db.Events.category.get_sports({ category: true })
        } else if (category === 'foodie') {
            events = await db.Events.category.get_foodie({ category: true })
        } else if (category === 'indoor') {
            events = await db.Events.category.get_indoor({ category: true })
        } else if (category === 'outdoor') {
            events = await db.Events.category.get_outdoor({ category: true })
        } else if (category === 'museum') {
            events = await db.Events.category.get_museum({ category: true })
        } else if (category === 'art') {
            events = await db.Events.category.get_art({ category: true })
        } else if (category === 'book') {
            events = await db.Events.category.get_book({ category: true })
        } else if (category === 'lecture') {
            events = await db.Events.category.get_lecture({ category: true })
        } else if (category === 'dance') {
            events = await db.Events.category.get_dance({ category: true })
        } else if (category === 'theatre') {
            events = await db.Events.category.get_theatre({ category: true })
        } else if (category === 'comedy') {
            events = await db.Events.category.get_comedy({ category: true })
        } else if (category === 'video') {
            events = await db.Events.category.get_video({ category: true })
        } else if (category === 'board') {
            events = await db.Events.category.get_board({ category: true })
        } else if (category === 'service') {
            events = await db.Events.category.get_service({ category: true })
        } else {
            events = await db.Events.get_all_events()
        }

        if (events.length === 0) {
            return res.status(200).send(events)
        }

        if (group === 'date') {
            events = events.filter(event => {
                return event.dating === true
            })
            
        } else if (group === 'family') {
            events = events.filter(event => {
                return event.family === true
            })
        } else if(group === 'friends'){
            events = events.filter(event => {
                return event.friends === true
            })
        } else if(group === 'large'){
            events = events.filter(event => {
                return event.large === true
            })
        }

        
        //filter out old events and convert months back to string
        events = events.filter(event => {
            return +event.year >= year
        }).filter(event => {
            if (+event.year === year) {
                return +event.month >= month
            }
        }).filter(event => {
            if (+event.month === month) {
                return +event.date >= date
            }
        })
        console.log(order)
        if(order === 'Order by Date'){
            events = events.sort((a,b)=>{
                return new Date((`${a.month}/${a.date}/${a.year}`)) - new Date((`${b.month}/${b.date}/${b.year}`))
            })
        } else if(order === 'distance'){
            
        }
        

        events.map(event => {
            if (+event.month === 0) {
                return event.month = 'January'
            } else if (+event.month === 1) {
                return event.month = 'February'
            } else if (+event.month === 2) {
                return event.month = 'March'
            } else if (+event.month === 3) {
                return event.month = 'April'
            } else if (+event.month === 4) {
                return event.month = 'May'
            } else if (+event.month === 5) {
                return event.month = 'June'
            } else if (+event.month === 6) {
                return event.month = 'July'
            } else if (+event.month === 7) {
                return event.month = 'August'
            } else if (+event.month === 8) {
                return event.month = 'September'
            } else if (+event.month === 9) {
                return event.month = 'October'
            } else if (+event.month === 10) {
                return event.month = 'November'
            } else if (+event.month === 11) {
                return event.month = 'December'
            }
        })

        if (events.length === 0) {
            return res.status(200).send(events)
        }
        //filter out based on weekday or weekend or any
        events = events.filter(event => {
            if (day === 'weekday') {
                return event.day !== 'Saturday' && event.day !== 'Sunday'
            } else if (day === 'weekend') {
                return event.day === 'Friday' || event.day === 'Saturday' || event.day === 'Sunday'
            } else {
                return event
            }
        })

        if (events.length === 0) {
            return res.status(200).send(events)
        }

        events = events.filter(event => {
            let newTime = event.start_time.substring(0, 2)
            newTime = +newTime
            if (time === 'morning') {
                return newTime >= 6 && newTime < 12
            } else if (time === 'afternoon') {
                return newTime >= 12 && newTime < 17
            } else if (time === 'evening') {
                return newTime >= 17 && newTime < 23
            } else if (time === 'night') {
                return newTime >= 23 || newTime < 6
            } else {
                return event
            }
        })

        if (events.length === 0) {
            return res.status(200).send(events)
        }

        events.map(event => {
            let startTime = event.start_time
            let startBegin = startTime.substring(0, 2)
            let startEnd = startTime.substring(3, 5)
            let endTime = event.end_time
            let endBegin = endTime.substring(0, 2)
            let endEnd = endTime.substring(3, 5)
            if (startBegin > 12) {
                startBegin -= 12;
                startTime = startBegin + ':' + startEnd + ' PM'
                event.start_time = startTime
            } else if (startBegin == 12) {
                startTime = startBegin + ':' + startEnd + ' PM'
                event.start_time = startTime
            }
            else {
                if (startBegin < 10) {
                    startBegin = startTime.substring(1, 2)
                }
                startTime = startBegin + ':' + startEnd + ' AM'
                event.start_time = startTime
            }

            if (endBegin > 12) {
                endBegin -= 12;
                endTime = endBegin + ':' + endEnd + ' PM'
                event.end_time = endTime
            } else if (endBegin == 12) {
                endTime = endBegin + ':' + endEnd + ' PM'
                event.end_time = endTime
            }
            else {
                if (endBegin < 10) {
                    endBegin = endTime.substring(1, 2)
                }
                endTime = endBegin + ':' + endEnd + ' AM'
                event.end_time = endTime
            }

            return event
        })
        res.status(200).send(events)
    },

    //when somebody creates an event must use a template where they will save the month as a number so it can do the math initially as is. 
}