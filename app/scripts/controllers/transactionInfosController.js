angular
    .module("ethExplorer")
    .controller(
    "transactionInfosCtrl",
    function ($rootScope, $scope, $location, $routeParams, $q) {
        
      function hex_to_ascii(str1) {
        var hex = str1.toString();
        var str = "";
        for (var n = 0; n < hex.length; n += 2) {
          str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
        }
        return str;
      }

      $scope.init = function () {
        $scope.txId = $routeParams.transactionId;

        if (!!$scope.txId) {
          // add a test to check if it match tx paterns to avoid useless API call, clients are not obliged to come from the search form...

          getTransactionInfos().then(function (result) {
            //TODO Refactor this logic, asynchron calls + services....
            var number = web3.eth.blockNumber;

            $scope.result = result;

            if (!!result.blockHash) {
              $scope.blockHash = result.blockHash;
            } else {
              $scope.blockHash = "pendiente";
            }
            if (!!result.blockNumber) {
              $scope.blockNumber = result.blockNumber;
            } else {
              $scope.blockNumber = "pendiente";
            }
            $scope.from = result.from;
            $scope.gas = result.gas;
            //$scope.gasPrice = result.gasPrice.c[0] + " WEI";
            $scope.gasPrice =
              web3.fromWei(result.gasPrice, "ether").toFormat(10) + " SCOL";
            $scope.hash = result.hash;
            $scope.nonce = result.nonce;

            $scope.input = result.input; // that's a string
            $scope.utf8Input = hex_to_ascii(result.input);

            $scope.to = result.to;
            $scope.transactionIndex = result.transactionIndex;
            //$scope.ethValue = web3.fromWei(result.value[0], "ether"); Newer method but has ""
            $scope.ethValue = result.value.c[0] / 10000;
            $scope.txprice =
              web3.fromWei(result.gas * result.gasPrice, "ether") + " SCOL";
            if (!!$scope.blockNumber) {
              $scope.conf = number - $scope.blockNumber;
              if ($scope.conf === 0) {
                $scope.conf = "unconfirmed"; //TODO change color button when unconfirmed... ng-if or ng-class
              }
            }
            //TODO Refactor this logic, asynchron calls + services....
            if (!!$scope.blockNumber) {
              var info = web3.eth.getBlock($scope.blockNumber);
              if (!!info) {
                $scope.time = info.timestamp;
              }
            }
          });
        } else {
          $location.path("/"); // add a trigger to display an error message so user knows he messed up with the TX number
        }

        function getTransactionInfos() {
          var deferred = $q.defer();

          web3.eth.getTransaction($scope.txId, function (error, result) {
            if (!error) {
              deferred.resolve(result);
            } else {
              deferred.reject(error);
            }
          });
          return deferred.promise;
        }
      };
      $scope.init();
    }
  );
