
import React from 'react';
import {shallow} from 'enzyme';
import ImageViewer from '../src';

const location = { search: "" }

test('ImageViewer allows for manifests to be set in the query string', () => {
  const new_location = { search: "?manifest=qsmanifest" }
  const iframe = shallow(<ImageViewer location={ new_location } /> );
  expect(iframe.find('iframe[src="/src/mirador/index.html#?manifest=qsmanifest&c=&m=&s=&cv=&xywh="]').exists()).toEqual(true);
})

test('ImageViewer Renders a default Iframe with default data', () => {
  const iframe = shallow(<ImageViewer location={ location } /> );
  expect(iframe.find('iframe').html()).toEqual('<iframe id="viewerFrame" width="800" height="600" src="/src/mirador/index.html#?manifest=https://presentation-iiif.library.nd.edu/CTAO-01-28/manifest&amp;c=&amp;m=&amp;s=&amp;cv=&amp;xywh="></iframe>');
});

test('ImageViewer allows the height to be set', () => {
  const iframe = shallow(<ImageViewer height="100" location={ location } /> );
  expect(iframe.find('iframe[height="100"]').exists()).toEqual(true);
});

test('ImageViewer allows the width to be set', () => {
  const iframe = shallow(<ImageViewer width="100" location={ location } /> );
  expect(iframe.find('iframe[width="100"]').exists()).toEqual(true);
});

test('ImageViewer allows the manifest to be set', () => {
  const iframe = shallow(<ImageViewer manifest="manifest" location={ location } /> );
  expect(iframe.find('iframe[src="/src/mirador/index.html#?manifest=manifest&c=&m=&s=&cv=&xywh="]').exists()).toEqual(true);
});

test('ImageViewer allows opaque uv property c to be set', () => {
  const iframe = shallow(<ImageViewer manifest="manifest" c="50" location={ location } /> );
  expect(iframe.find('iframe[src="/src/mirador/index.html#?manifest=manifest&c=50&m=&s=&cv=&xywh="]').exists()).toEqual(true);
});

test('ImageViewer allows opaque uv property s to be set', () => {
  const iframe = shallow(<ImageViewer manifest="manifest" s="50" location={ location } /> );
  expect(iframe.find('iframe[src="/src/mirador/index.html#?manifest=manifest&c=&m=&s=50&cv=&xywh="]').exists()).toEqual(true);
});

test('ImageViewer allows opaque uv property m to be set', () => {
  const iframe = shallow(<ImageViewer manifest="manifest" m="50" location={ location } /> );
  expect(iframe.find('iframe[src="/src/mirador/index.html#?manifest=manifest&c=&m=50&s=&cv=&xywh="]').exists()).toEqual(true);
});

test('ImageViewer allows opaque uv property cv to be set', () => {
  const iframe = shallow(<ImageViewer manifest="manifest" cv="50" location={ location } /> );
  expect(iframe.find('iframe[src="/src/mirador/index.html#?manifest=manifest&c=&m=&s=&cv=50&xywh="]').exists()).toEqual(true);
});

test('ImageViewer allows opaque uv property xywh to be set', () => {
  const iframe = shallow(<ImageViewer manifest="manifest" xywh="50" location={ location } /> )
  console.log(iframe.html())
  expect(iframe.find('iframe[src="/src/mirador/index.html#?manifest=manifest&c=&m=&s=&cv=&xywh=50"]').exists()).toEqual(true)
});
