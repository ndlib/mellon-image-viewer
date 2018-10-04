
import React from 'react';
import {shallow} from 'enzyme';
import ImageViewer from '../src';

test('ImageViewer Renders a default Iframe with default data', () => {
  const iframe = shallow(<ImageViewer /> );
  expect(iframe.find('iframe').html()).toEqual('<iframe width="800" height="600" src="/universalviewer/index.html#?manifest=https://s3.amazonaws.com/mellon-data-broker-publicbucket-wtci53auglzt/manifest_prod.json&amp;c=&amp;m=&amp;s=&amp;cv=&amp;xywh="></iframe>');
});

test('ImageViewer allows the height to be set', () => {
  const iframe = shallow(<ImageViewer height="100" /> );
  expect(iframe.find('iframe[height="100"]').exists()).toEqual(true);
});

test('ImageViewer allows the width to be set', () => {
  const iframe = shallow(<ImageViewer width="100" /> );
  expect(iframe.find('iframe[width="100"]').exists()).toEqual(true);
});

test('ImageViewer allows the manifest to be set', () => {
  const iframe = shallow(<ImageViewer manifest="manifest" /> );
  expect(iframe.find('iframe[src="/universalviewer/index.html#?manifest=manifest&c=&m=&s=&cv=&xywh="]').exists()).toEqual(true);
});

test('ImageViewer allows opaque uv property c to be set', () => {
  const iframe = shallow(<ImageViewer manifest="manifest" c="50" /> );
  expect(iframe.find('iframe[src="/universalviewer/index.html#?manifest=manifest&c=50&m=&s=&cv=&xywh="]').exists()).toEqual(true);
});

test('ImageViewer allows opaque uv property s to be set', () => {
  const iframe = shallow(<ImageViewer manifest="manifest" s="50" /> );
  expect(iframe.find('iframe[src="/universalviewer/index.html#?manifest=manifest&c=&m=&s=50&cv=&xywh="]').exists()).toEqual(true);
});

test('ImageViewer allows opaque uv property m to be set', () => {
  const iframe = shallow(<ImageViewer manifest="manifest" m="50" /> );
  expect(iframe.find('iframe[src="/universalviewer/index.html#?manifest=manifest&c=&m=50&s=&cv=&xywh="]').exists()).toEqual(true);
});

test('ImageViewer allows opaque uv property cv to be set', () => {
  const iframe = shallow(<ImageViewer manifest="manifest" cv="50" /> );
  expect(iframe.find('iframe[src="/universalviewer/index.html#?manifest=manifest&c=&m=&s=&cv=50&xywh="]').exists()).toEqual(true);
});

test('ImageViewer allows opaque uv property xywh to be set', () => {
  const iframe = shallow(<ImageViewer manifest="manifest" xywh="50" /> );
  expect(iframe.find('iframe[src="/universalviewer/index.html#?manifest=manifest&c=&m=&s=&cv=&xywh=50"]').exists()).toEqual(true);
});
