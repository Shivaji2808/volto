import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import { useIntl, FormattedMessage } from 'react-intl';
import { BlockDataForm, Icon, Image } from '@plone/volto/components';
import { ImageSchema } from './schema';
import imageSVG from '@plone/volto/icons/image.svg';

const ImageSidebar = (props) => {
  const { data, block, onChangeBlock } = props;
  const intl = useIntl();
  const schema = ImageSchema({ formData: data, intl });
  return (
    <>
      <header className="header pulled">
        <h2>
          <FormattedMessage id="Image" defaultMessage="Image" />
        </h2>
      </header>

      <Segment className="sidebar-metadata-container" secondary attached>
        {typeof data.url === 'string' ? (
          // Entered an external URL
          <>
            {data.url.split('/').slice(-1)[0]}
            <img src={data.url} alt={data.alt} style={{ width: '50%' }} />
          </>
        ) : Object.prototype.toString.call(data.url) === '[object Object]' ? (
          // Selected an image with the object browser
          <>
            {data.url['@id'].split('/').slice(-1)[0]}
            <Image
              item={data.url}
              imageField="image"
              alt={data.alt}
              loading="lazy"
              style={{ width: '50%', height: 'auto' }}
            />
          </>
        ) : (
          <>
            <FormattedMessage
              id="No image selected"
              defaultMessage="No image selected"
            />
            <Icon name={imageSVG} size="100px" color="#b8c6c8" />
          </>
        )}
      </Segment>
      <BlockDataForm
        schema={schema}
        title={schema.title}
        onChangeField={(id, value) => {
          if (id === 'url' && Array.isArray(value)) {
            onChangeBlock(block, {
              ...data,
              alt: data.alt || value[0]?.title,
              url: value[0],
            });
          } else {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }
        }}
        onChangeBlock={onChangeBlock}
        formData={data}
        block={block}
      />
    </>
  );
};

ImageSidebar.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
};

export default ImageSidebar;
