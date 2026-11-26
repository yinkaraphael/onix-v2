import test from 'node:test';
import assert from 'node:assert/strict';
import { resolveRoute, getPathForPage } from './routes.ts';

test('resolveRoute resolves home and root', () => {
  const match = resolveRoute('/');
  assert.equal(match.page, 'home');
  assert.equal(match.language, 'en');
});

test('resolveRoute redirects legacy /o-home/about-us/ to about', () => {
  const match = resolveRoute('/o-home/about-us/');
  assert.equal(match.page, 'about');
  assert.equal(match.isRedirected, true);
});

test('resolveRoute redirects legacy /infrastructure to the-facility', () => {
  const match = resolveRoute('/infrastructure');
  assert.equal(match.page, 'the-facility');
  assert.equal(match.isRedirected, true);
});

test('resolveRoute redirects /board-pack to contact', () => {
  const match = resolveRoute('/board-pack');
  assert.equal(match.page, 'contact');
});

test('resolveRoute correctly handles Senegal french page directly and under repo subpath', () => {
  const direct = resolveRoute('/fr/senegal');
  assert.equal(direct.page, 'fr-senegal');
  assert.equal(direct.language, 'fr');

  const subpath = resolveRoute('/onix-redesign-v2/fr/senegal');
  assert.equal(subpath.page, 'fr-senegal');
  assert.equal(subpath.language, 'fr');
});

test('getPathForPage maps back to clean URLs', () => {
  assert.equal(getPathForPage('the-facility'), '/the-facility');
  assert.equal(getPathForPage('fr-senegal'), '/fr/senegal');
  assert.equal(getPathForPage('book-a-tour'), '/book-a-tour');
});
