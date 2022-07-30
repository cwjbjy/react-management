import { useCallback, useEffect } from 'react';
import { useExternal } from 'ahooks';
import './index.scss';

const nodeDataArray = [
  {
    key: 1,
    question: 'Greeting',
    actions: [
      { text: 'Sales', figure: 'ElectricalHazard', fill: 'blue' },
      { text: 'Parts and service', figure: 'FireHazard', fill: 'red' },
      {
        text: 'Representative',
        figure: 'IrritationHazard',
        fill: 'yellow',
      },
    ],
  },
  {
    key: 2,
    question: 'Sales',
    actions: [
      { text: 'Compact', figure: 'ElectricalHazard', fill: 'blue' },
      { text: 'Mid-Size', figure: 'FireHazard', fill: 'red' },
      { text: 'Large', figure: 'IrritationHazard', fill: 'yellow' },
    ],
  },
  {
    key: 3,
    question: 'Parts and service',
    actions: [
      { text: 'Maintenance', figure: 'ElectricalHazard', fill: 'blue' },
      { text: 'Repairs', figure: 'FireHazard', fill: 'red' },
      {
        text: 'State Inspection',
        figure: 'IrritationHazard',
        fill: 'yellow',
      },
    ],
  },
  { key: 4, question: 'Representative' },
  { key: 5, question: 'Compact' },
  { key: 6, question: 'Mid-Size' },
  {
    key: 7,
    question: 'Large',
    actions: [
      { text: 'SUV', figure: 'ElectricalHazard', fill: 'blue' },
      { text: 'Van', figure: 'FireHazard', fill: 'red' },
    ],
  },
  { key: 8, question: 'Maintenance' },
  { key: 9, question: 'Repairs' },
  { key: 10, question: 'State Inspection' },
  { key: 11, question: 'SUV' },
  { key: 12, question: 'Van' },
  { key: 13, category: 'Terminal', text: 'Susan' },
  { key: 14, category: 'Terminal', text: 'Eric' },
  { key: 15, category: 'Terminal', text: 'Steven' },
  { key: 16, category: 'Terminal', text: 'Tom' },
  { key: 17, category: 'Terminal', text: 'Emily' },
  { key: 18, category: 'Terminal', text: 'Tony' },
  { key: 19, category: 'Terminal', text: 'Ken' },
  { key: 20, category: 'Terminal', text: 'Rachel' },
];

const linkDataArray = [
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

const FoldChart = () => {
  const status = useExternal('/static/go.js');
  const dealShow = useCallback(() => {
    var $ = window.go.GraphObject.make;

    var myDiagram = $(window.go.Diagram, 'myDiagramDiv', {
      allowCopy: false,
      layout: $(window.go.TreeLayout, {
        angle: 90,
        arrangement: window.go.TreeLayout.ArrangementFixedRoots,
      }),
      'undoManager.isEnabled': true,
    });

    var bluegrad = $(window.go.Brush, 'Linear', { 0: '#C4ECFF', 1: '#70D4FF' });
    var greengrad = $(window.go.Brush, 'Linear', {
      0: '#B1E2A5',
      1: '#7AE060',
    });

    var actionTemplate = $(
      window.go.Panel,
      'Horizontal',
      $(window.go.Shape, { width: 12, height: 12 }, new window.go.Binding('figure'), new window.go.Binding('fill')),
      $(window.go.TextBlock, { font: '10pt Verdana, sans-serif' }, new window.go.Binding('text')),
    );

    myDiagram.nodeTemplate = $(
      // the default node template
      window.go.Node,
      'Vertical',
      $(
        window.go.Panel,
        'Auto',
        $(window.go.Shape, 'Rectangle', { fill: bluegrad, stroke: null }),
        $(
          window.go.Panel,
          'Vertical',
          { margin: 3 },
          // the title
          $(
            window.go.TextBlock,
            {
              stretch: window.go.GraphObject.Horizontal,
              font: 'bold 12pt Verdana, sans-serif',
            },
            new window.go.Binding('text', 'question'),
          ),
          // the optional list of actions
          $(
            window.go.Panel,
            'Vertical',
            { stretch: window.go.GraphObject.Horizontal, visible: false }, // not visible unless there is more than one action
            new window.go.Binding('visible', 'actions', function (acts: any) {
              return Array.isArray(acts) && acts.length > 0;
            }),
            // headered by a label and a PanelExpanderButton inside a Table
            $(
              window.go.Panel,
              'Table',
              { stretch: window.go.GraphObject.Horizontal },
              $(window.go.TextBlock, 'Choices', {
                alignment: window.go.Spot.Left,
                font: '10pt Verdana, sans-serif',
              }),
              $(
                'PanelExpanderButton',
                'COLLAPSIBLE', // name of the object to make visible or invisible
                { column: 1, alignment: window.go.Spot.Right },
              ),
            ), // end Table panel
            // with the list data bound in the Vertical Panel
            $(
              window.go.Panel,
              'Vertical',
              {
                name: 'COLLAPSIBLE', // identify to the PanelExpanderButton
                padding: 2,
                stretch: window.go.GraphObject.Horizontal, // take up whole available width
                background: 'white', // to distinguish from the node's body
                defaultAlignment: window.go.Spot.Left, // thus no need to specify alignment on each element
                itemTemplate: actionTemplate, // the Panel created for each item in Panel.itemArray
              },
              new window.go.Binding('itemArray', 'actions'), // bind Panel.itemArray to nodedata.actions
            ), // end action list Vertical Panel
          ), // end optional Vertical Panel
        ), // end outer Vertical Panel
      ), // end "BODY"  Auto Panel
      $(window.go.Panel, { height: 17 }, $('TreeExpanderButton')),
    );

    myDiagram.nodeTemplateMap.add(
      'Terminal',
      $(
        window.go.Node,
        'Spot',
        $(window.go.Shape, 'Circle', {
          width: 55,
          height: 55,
          fill: greengrad,
          stroke: null,
        }),
        $(window.go.TextBlock, { font: '10pt Verdana, sans-serif' }, new window.go.Binding('text')),
      ),
    );

    myDiagram.linkTemplate = $(
      window.go.Link,
      window.go.Link.Orthogonal,
      { deletable: false, corner: 10 },
      $(window.go.Shape, { strokeWidth: 2 }),
      $(
        window.go.TextBlock,
        window.go.Link.OrientUpright,
        {
          background: 'white',
          visible: false, // unless the binding sets it to true for a non-empty string
          segmentIndex: -2,
          segmentOrientation: window.go.Link.None,
        },
        new window.go.Binding('text', 'answer'),
        // hide empty string;
        // if the "answer" property is undefined, visible is false due to above default setting
        new window.go.Binding('visible', 'answer', function (a: any) {
          return a ? true : false;
        }),
      ),
    );

    myDiagram.model = $(window.go.GraphLinksModel, {
      nodeDataArray: nodeDataArray,
      linkDataArray: linkDataArray,
    });
  }, []);
  useEffect(() => {
    if (status === 'ready') dealShow();
  }, [status, dealShow]);

  return <div id="myDiagramDiv" className="mygoChart"></div>;
};

export default FoldChart;
