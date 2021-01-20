# Trello Clone

## Reducer Actions

### ADD_TASK

ind the target list index and save it to targetListIndex constant.

Get the targetList and create a new object overriding the tasks field. Use the spread syntax to append the new task to the end of it.

Return the new state object that overrides the lists field using the overrideItemAtIndex function.

## arrayUtils

### overrideItemAtIndex

This function takes an array, newItem, and targetIndex and then generates a new array
where the object at index targetIndex is overriden with the newItem value.

Type variable T represents the type of the items in the array.

To generate the updated array the method map allows traversal of the items in the array.
This method can pass two arguments to the mapper function - the traversed item and its index.
So we can check if the items index matches the targetIndex to return the newItem.