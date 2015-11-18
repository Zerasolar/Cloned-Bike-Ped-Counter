angular.module('bikePed')
.controller('UserCtrl', [
  '$scope',
  'users',
  function($scope, users){
    $scope.init = function(first_name, last_name, email, password, id) {
      $scope.user = {first_name, last_name, email, password, id
      };
    };
    $scope.editUser = function(){
      if($scope.first_name === '' && $scope.last_name === '' && $scope.email === '', $scope.password === '') { return;}
      users.update({
        first_name: $scope.user.first_name,
        last_name: $scope.user.last_name,
        email: $scope.user.email,
        password: $scope.user.password,
        id: $scope.user.id,
      });
    };

    $scope.submitForm = function(){
      var json = users.submit({
        quantity: $scope.quantity,
        sex: $scope.sex,
        sidewalk: $scope.sidewalk,
        wrong_way: $scope.wrong_way,
        helmet: $scope.helmet,
      });
      json.success(function(form){
        if(form.id !== null) {
          $scope.message = "Success"}
          else{
            $scope.message = "Failed"
          }  
      })
      
      var radioButtons = angular.element(document.getElementsByClassName("selected_radio_label"));
      for(i = 0; i < radioButtons.length; i++ ){
        radioButtons[i].classList.remove("selected_radio_label");
      }
    
      $scope.quantity = '';
      $scope.sex = '';
      $scope.sidewalk = '';
      $scope.wrong_way = '';
      $scope.helmet = '';
    };

  }])