//create the module in angular - shopping list app
var myShoppingListApp = angular.module('myShoppingListApp', []);

//give focus to add item textbox on load
$("#textbox").focus();

//use scope in function to bind list data between js and html file - empty list to start
myShoppingListApp.controller('firstController', function($scope) {
    $scope.todo_lists = [];
    $scope.new_item = "";
    $scope.form_error = "";

    $scope.addItem = function() {
        if ($scope.new_item.length === 0) {
            $scope.form_error = true;
        } else {
            $scope.form_error = false;
            //add item to list
            $scope.todo_lists.push($scope.new_item);
            $scope.new_item = '';
            //Give focus to add new item textbox after submission
            $("#textbox").focus();
        }
    };

    //delete all items from the list
    $scope.deleteItem = function(i) {
        if (confirm("OK to delete ALL items?")) {
            $scope.todo_lists = [];
        }
    };
});

myShoppingListApp.filter('capitalize', function() {
    return function(input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    };
});
