app.controller('indexCtl', function ($scope,$http) { 

  $scope.titel="Nran";
  $baseUrl="http://amoein.ir/";
  $serviceUrl="service.php/api/";

  $scope.name= '';

  $scope.in={};
  $scope.tabel=[];

  $scope.Add = function ()
  {
    debugger;
    var a = {};
    a.id=createGuid();
    a.TT=$scope.in.tt;  
    a.BSC=$scope.in.bsc; 
    a.Site=$scope.in.site;  
    a.Start=$scope.in.start;
    a.FaultReason=$scope.in.reason;
    a.Comment=$scope.in.comment;
    a.Priority=$scope.in.priority;
    a.Region=$scope.in.region;
    a.Index=$scope.in.index;
    a.Pending=$scope.in.pending;
    a.Comment2==$scope.in.comment2; 
    a.SLA=$scope.in.sla;

    $scope.tabel.push(a);
    debugger;
  }

function createGuid()
{
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });
}

});

