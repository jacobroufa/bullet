# Bullet Journal
## Built with [Dojo2](https://github.com/dojo/meta)

### Use

* Make sure you have [dojo/cli](https://github.com/dojo/cli) installed globally: `npm i @dojo/cli -g`.
* Run `npm install` to fetch all of the dependencies we need.
* Run `dojo build -w` to build the application and start a webserver.
* Visit http://localhost:9999 to view the project in your browser.

### Project Status

I've put a check box next to intended components, to indicate their presence/completeness in the application.

* [ ] Application container and basic menu functionality
* [ ] Index
  * Contains indexed collections, ordered by date asc
* [ ] Collection
  * Indexed flag
  * Title
  * Content (can be Log, Habit Calendar, Free-form, et al)
* [ ] Log
  * Mixin for Collection
  * Content is a List of ListItem mixed in with Status
  * Type defaults to "Daily"
  * Unlimited entries
  * Title is full date (MM/DD/YYYY) unless specified
  * ----------
  * [ ] FutureMixin
	* ListItem are mixed in with Month, Date, Status
	* Title is "Future Log"
  * [ ] MonthlyMixin
	* Title is "<Month>"
	* ----------
    * [ ] CalMixin
	  * ListItem are mixed in with Day, Date
	  * Predefined # of entries, all shown
  * [ ] HabitMixin
    * ListItem with no mixins
	* Title is "Habits"
* [ ] ListItem
  * Text input field
  * ----------
  * [ ] PrefixMixin
    * Accepts a delimiter, defaults to ''
	* Prepended to ListItem, ordered as mixed in
    * ----------
    * [ ] DayPrefixMixin
      * Day, first three letters abbreviation
    * [ ] MonthPrefixMixin
      * Month, first three letters abbreviation
    * [ ] DatePrefixMixin
      * Date, as a number
  * [ ] StatusMixin
    * Toggleable status indicating one of the following conditions:
	  * Note
	  * To-do
	  * Event
	  * Migrated from past
	  * Sent to Calendar / future log
  * [ ] DateTimeMixin
    * Attaches a date and/or time to the ListItem
	* Accepts a format string
* [ ] HabitCalendar
  * Mixin for Collection
  * Accepts a Log Collection of type Habit
  * Content is a grid-like calendar with Day of the Month (1-31) along the top and habits on the side
  * Title is "<Month> Habits"
  * One column each for number of days in the month, labeled as the date (1-31)
  * One row each per habit
  * Cell definition:
    * [ ] HabitCell
	  * toggleable "complete" marker
	  * optionally, a counter?
