import {BaseComponent} from "../../common/component";
import KafkaData from "./kafka-visualization-data";
import {BindingType} from "../../common/bindingTypes";

var inputPump = require("../../common/input-pump.svg");

interface VisItem {
    id: number,
    type: string,
    output?: Array<{id: number, rate: number}>
    input?: Array<{id: number, rate: number}>
}

declare var d3;

class KafkaVisualization extends BaseComponent {
    public scope = {
        name: BindingType.ONE_WAY
    };

    public controllerAs = 'ctrl';

    public controller = KafkaVisualizationController;

    public template = require('./kafka-visualization.html');
}

class KafkaVisualizationController {

    static $inject = ['$scope'];

    data: Array<any> = KafkaData;


    constructor(public $scope){
        this.renderData();
    };

    renderData() {
        d3.select("#kafka-visualization")
            .append("svg")
            .style("width", 200)
            .style("height", 200)
            .style("fill", "blue")
            .append("svg:image")
            .attr()
    }
}

angular.module('app')
    .directive('kafkaVisualization', () => new KafkaVisualization());