angular.module('registerIO', [])
    .controller('mainController', function($scope, $http) {

        $http.get('/api/stakeholders')
            .success(function(data) {
                $scope.stakeholders = data;
            });


        $scope.addStakeholder = function() {
            alert("Add stakeholder here")
        };

        $scope.searchStakeholders = function(searchTerm) {
            var thisSearch = searchTerm.toLowerCase();
            $scope.searchResults = [];

            angular.forEach($scope.stakeholders, function(value, key) {

                //check the group
                if (value.group != undefined && value.group.toLowerCase() == thisSearch) {
                    $scope.searchResults.push($scope.stakeholders[key]);
                }
                //check the role
                else if (value.role != undefined && value.role.toLowerCase() == thisSearch) {
                    $scope.searchResults.push($scope.stakeholders[key]);
                }
            });

            console.log($scope.searchResults)

        };


    });
