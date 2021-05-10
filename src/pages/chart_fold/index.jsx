import React from "react";
import "./index.scss";

export default class FoldChart extends React.Component {
  componentDidMount() {
    this.dealShow();
  }
  dealShow = () => {
    var $ = go.GraphObject.make; // for conciseness in defining templates
    var myDiagram = $(go.Diagram, "myDiagramDiv", {
      allowCopy: false,
      layout: $(go.TreeLayout, {
        angle: 90,
        arrangement: go.TreeLayout.ArrangementFixedRoots,
      }),
      "undoManager.isEnabled": true,
    });

    var bluegrad = $(go.Brush, "Linear", { 0: "#C4ECFF", 1: "#70D4FF" });
    var greengrad = $(go.Brush, "Linear", { 0: "#B1E2A5", 1: "#7AE060" });

    // each action is represented by a shape and some text
    var actionTemplate = $(
      go.Panel,
      "Horizontal",
      $(
        go.Shape,
        { width: 12, height: 12 },
        new go.Binding("figure"),
        new go.Binding("fill")
      ),
      $(
        go.TextBlock,
        { font: "10pt Verdana, sans-serif" },
        new go.Binding("text")
      )
    );

    // each regular Node has body consisting of a title followed by a collapsible list of actions,
    // controlled by a PanelExpanderButton, with a TreeExpanderButton underneath the body
    myDiagram.nodeTemplate = $(
      // the default node template
      go.Node,
      "Vertical",
      $(
        go.Panel,
        "Auto",
        $(go.Shape, "Rectangle", { fill: bluegrad, stroke: null }),
        $(
          go.Panel,
          "Vertical",
          { margin: 3 },
          // the title
          $(
            go.TextBlock,
            {
              stretch: go.GraphObject.Horizontal,
              font: "bold 12pt Verdana, sans-serif",
            },
            new go.Binding("text", "question")
          ),
          // the optional list of actions
          $(
            go.Panel,
            "Vertical",
            { stretch: go.GraphObject.Horizontal, visible: false }, // not visible unless there is more than one action
            new go.Binding("visible", "actions", function (acts) {
              return Array.isArray(acts) && acts.length > 0;
            }),
            // headered by a label and a PanelExpanderButton inside a Table
            $(
              go.Panel,
              "Table",
              { stretch: go.GraphObject.Horizontal },
              $(go.TextBlock, "Choices", {
                alignment: go.Spot.Left,
                font: "10pt Verdana, sans-serif",
              }),
              $(
                "PanelExpanderButton",
                "COLLAPSIBLE", // name of the object to make visible or invisible
                { column: 1, alignment: go.Spot.Right }
              )
            ), // end Table panel
            // with the list data bound in the Vertical Panel
            $(
              go.Panel,
              "Vertical",
              {
                name: "COLLAPSIBLE", // identify to the PanelExpanderButton
                padding: 2,
                stretch: go.GraphObject.Horizontal, // take up whole available width
                background: "white", // to distinguish from the node's body
                defaultAlignment: go.Spot.Left, // thus no need to specify alignment on each element
                itemTemplate: actionTemplate, // the Panel created for each item in Panel.itemArray
              },
              new go.Binding("itemArray", "actions") // bind Panel.itemArray to nodedata.actions
            ) // end action list Vertical Panel
          ) // end optional Vertical Panel
        ) // end outer Vertical Panel
      ), // end "BODY"  Auto Panel
      $(go.Panel, { height: 17 }, $("TreeExpanderButton"))
    );

    // define a second kind of Node:
    myDiagram.nodeTemplateMap.add(
      "Terminal",
      $(
        go.Node,
        "Spot",
        $(go.Shape, "Circle", {
          width: 55,
          height: 55,
          fill: greengrad,
          stroke: null,
        }),
        $(
          go.TextBlock,
          { font: "10pt Verdana, sans-serif" },
          new go.Binding("text")
        )
      )
    );

    myDiagram.linkTemplate = $(
      go.Link,
      go.Link.Orthogonal,
      { deletable: false, corner: 10 },
      $(go.Shape, { strokeWidth: 2 }),
      $(
        go.TextBlock,
        go.Link.OrientUpright,
        {
          background: "white",
          visible: false, // unless the binding sets it to true for a non-empty string
          segmentIndex: -2,
          segmentOrientation: go.Link.None,
        },
        new go.Binding("text", "answer"),
        // hide empty string;
        // if the "answer" property is undefined, visible is false due to above default setting
        new go.Binding("visible", "answer", function (a) {
          return a ? true : false;
        })
      )
    );

    var nodeDataArray = [
      {
        key: 1,
        question: "Greeting",
        actions: [
          { text: "Sales", figure: "ElectricalHazard", fill: "blue" },
          { text: "Parts and service", figure: "FireHazard", fill: "red" },
          {
            text: "Representative",
            figure: "IrritationHazard",
            fill: "yellow",
          },
        ],
      },
      {
        key: 2,
        question: "Sales",
        actions: [
          { text: "Compact", figure: "ElectricalHazard", fill: "blue" },
          { text: "Mid-Size", figure: "FireHazard", fill: "red" },
          { text: "Large", figure: "IrritationHazard", fill: "yellow" },
        ],
      },
      {
        key: 3,
        question: "Parts and service",
        actions: [
          { text: "Maintenance", figure: "ElectricalHazard", fill: "blue" },
          { text: "Repairs", figure: "FireHazard", fill: "red" },
          {
            text: "State Inspection",
            figure: "IrritationHazard",
            fill: "yellow",
          },
        ],
      },
      { key: 4, question: "Representative" },
      { key: 5, question: "Compact" },
      { key: 6, question: "Mid-Size" },
      {
        key: 7,
        question: "Large",
        actions: [
          { text: "SUV", figure: "ElectricalHazard", fill: "blue" },
          { text: "Van", figure: "FireHazard", fill: "red" },
        ],
      },
      { key: 8, question: "Maintenance" },
      { key: 9, question: "Repairs" },
      { key: 10, question: "State Inspection" },
      { key: 11, question: "SUV" },
      { key: 12, question: "Van" },
      { key: 13, category: "Terminal", text: "Susan" },
      { key: 14, category: "Terminal", text: "Eric" },
      { key: 15, category: "Terminal", text: "Steven" },
      { key: 16, category: "Terminal", text: "Tom" },
      { key: 17, category: "Terminal", text: "Emily" },
      { key: 18, category: "Terminal", text: "Tony" },
      { key: 19, category: "Terminal", text: "Ken" },
      { key: 20, category: "Terminal", text: "Rachel" },
    ];
    var linkDataArray = [
      { from: 1, to: 2, answer: 1 },
      { from: 1, to: 3, answer: 2 },
      { from: 1, to: 4, answer: 3 },
      { from: 2, to: 5, answer: 1 },
      { from: 2, to: 6, answer: 2 },
      { from: 2, to: 7, answer: 3 },
      { from: 3, to: 8, answer: 1 },
      { from: 3, to: 9, answer: 2 },
      { from: 3, to: 10, answer: 3 },
      { from: 7, to: 11, answer: 1 },
      { from: 7, to: 12, answer: 2 },
      { from: 5, to: 13 },
      { from: 6, to: 14 },
      { from: 11, to: 15 },
      { from: 12, to: 16 },
      { from: 8, to: 17 },
      { from: 9, to: 18 },
      { from: 10, to: 19 },
      { from: 4, to: 20 },
    ];

    // create the Model with the above data, and assign to the Diagram
    myDiagram.model = $(go.GraphLinksModel, {
      nodeDataArray: nodeDataArray,
      linkDataArray: linkDataArray,
    });
  };
  render() {
    return <div id="myDiagramDiv" className="mygoChart"></div>;
  }
}
