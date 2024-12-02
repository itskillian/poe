### Features
- lightweight webapp developed with HTML, JavaScript and CSS
- users click entries to crossthrough and mark completed
- filters dynamically show/hide entries
- reset filter to revert all selections and localstorage values to default/false
- state managed using localstorage for persistence between reloads

### Technologies Used
- JavaScript
- HTML/CSS

### How it works
- each entry has a corresponding class attribute(s) for dynamic CSS functionality
- entry completion is handled using an event listener, which alters the class and in turn css properties to line-through the entry
- filters, when clicked, select all entries with the corresponding class, then toggle between 'display: block' and 'display: hidden' for all matches
- state is stored in localstorage each time a user marks an entries as completed, or makes a filter selection/reset

### Problems I had to solve
- due to using css transition property to animate entries being hidden and unhidden, I encountered a bug where if a user changed filters too quickly, the css properties and corresponding class toggle could desync, showing entries which should be hidden or vice versa
- to solve this I used a variable to flag if any animation is occuring, or in this case any time a filter is selected, and add a small delay using setTimeout before another filter can be toggled again
