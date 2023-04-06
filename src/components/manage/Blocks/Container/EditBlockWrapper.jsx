import React from 'react';
import { Icon } from '@plone/volto/components';
import { Button } from 'semantic-ui-react';
import { defineMessages, useIntl } from 'react-intl';
import NewBlockAddButton from './NewBlockAddButton';
import cx from 'classnames';

import clearSVG from '@plone/volto/icons/clear.svg';

const messages = defineMessages({
  delete: {
    id: 'Remove row element {index}',
    defaultMessage: 'Remove row element {index}',
  },
  reset: {
    id: 'Reset row element {index}',
    defaultMessage: 'Reset row element {index}',
  },
});

const EditBlockWrapper = (props) => {
  const intl = useIntl();

  const { blockProps, draginfo, children } = props;
  const {
    block,
    selected,
    type,
    blocksConfig,
    onChangeBlock,
    onDeleteBlock,
    onSelectBlock,
    data,
    index,
  } = blockProps;

  function onResetBlock() {
    onChangeBlock(block, { '@type': 'empty' });
  }

  return (
    <div
      ref={draginfo.innerRef}
      {...draginfo.draggableProps}
      {...draginfo.dragHandleProps}
      className={cx(`block-editor-${data['@type']}`, { selected })}
    >
      <div
        role="presentation"
        className="cell-wrapper"
        onClick={(e) => {
          onSelectBlock(block);
        }}
      >
        {type !== 'empty' ? (
          <Button
            aria-label={intl.formatMessage(messages.reset, {
              index,
            })}
            basic
            icon
            onClick={(e) => onResetBlock(block, {})}
            className="remove-block-button"
          >
            <Icon name={clearSVG} className="circled" size="24px" />
          </Button>
        ) : (
          <Button
            basic
            icon
            className="remove-block-button"
            onClick={(e) => onDeleteBlock(block, true)}
            aria-label={intl.formatMessage(messages.delete, {
              index,
            })}
          >
            <Icon
              name={clearSVG}
              className="circled"
              size="24px"
              color="#e40166"
            />
          </Button>
        )}
        {type && type !== 'empty' ? (
          <div className={`ui drag block inner ${type}`}>{children}</div>
        ) : (
          <div
            className={cx('row-empty-placeholder', {
              selected: selected,
            })}
            role="presentation"
            onClick={(e) => {
              e.stopPropagation();
              onSelectBlock(block);
            }}
          >
            <p>Add a new block</p>
            <NewBlockAddButton
              block={block}
              index={index}
              blocksConfig={blocksConfig}
              onMutateBlock={(block, value) =>
                onChangeBlock(block, {
                  ...data,
                  ...value,
                })
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default EditBlockWrapper;
