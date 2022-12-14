import {
    describe,
    it,
    expect,
    beforeAll,
} from 'vitest';
import {
    mount,
    type VueWrapper,
} from '@vue/test-utils';
import LeftSide from 'components/LeftSide.vue';

describe('LeftSide.vue', (): void => {
    let component: VueWrapper;

    beforeAll((): void => {
        component = mount(LeftSide, {});
    });

    it('should create', (): void => {
        expect(component.exists()).toBeTruthy();
    });
});
