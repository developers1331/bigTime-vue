/* eslint-disable vue/one-component-per-file */
import {
    describe,
    it,
    expect,
    beforeAll,
} from 'vitest';
import {
    shallowMount,
    type VueWrapper,
} from '@vue/test-utils';
import LeftSide from 'components/LeftSide.vue';
import {defineComponent} from 'vue';

describe('LeftSide.vue', (): void => {
    let wrapper: VueWrapper;

    const mock = {
        RouterLink: defineComponent({
            name: 'RouterLink',
            props: {
                to: {
                    type: String,
                    default: '',
                },
            },
            template: '<slot></slot>',
        }),
        transition: defineComponent({
            name: 'Transition',
            template: '<slot></slot>',
        }),
        IconLogo: defineComponent({
            name: 'IconLogo',
            template: '<div>logo</div>',
        }),
    };

    beforeAll((): void => {
        wrapper = shallowMount(LeftSide, {
            global: {
                stubs: mock,
            },
        });
    });

    it('should create', (): void => {
        expect(wrapper.exists()).toBeTruthy();
    });
});
