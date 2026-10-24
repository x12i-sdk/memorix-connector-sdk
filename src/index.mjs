import assert from 'node:assert/strict';
import { createFixtureConnector, createConnectorTestHarness } from '@x12i/memorix-connector-sdk';

const connector = createFixtureConnector([{ id: 'one', body: { title: 'First' } }, { id: 'two', body: { title: 'Second' } }]);
const source = { id: 'demo-source', name: 'Demo source', kind: 'fixture', streams: [{ streamId: 'items', endpoint: '/items', objectType: 'demo-item', dataCategory: 'knowledge', identityPath: 'id', checkpoint: { method: 'cursor' } }] };
const harness = createConnectorTestHarness({ connector, source });
const result = await harness.pull();
assert.equal(result.status, 'succeeded');
assert.equal(harness.port.records.length, 2);
assert.equal(harness.port.records[0].sourceItemId, 'one');
console.log({ status: result.status, records: harness.port.records });
// The conformance port is an isolated oracle, not a production persistence backend.
