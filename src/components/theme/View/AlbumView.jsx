import { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, GridColumn, Segment } from 'semantic-ui-react';
import { Button, Modal, Grid } from 'semantic-ui-react';
import { Icon, UniversalLink, PreviewImage } from '@plone/volto/components';

import openSVG from '@plone/volto/icons/open.svg';
import aheadSVG from '@plone/volto/icons/ahead.svg';
import backSVG from '@plone/volto/icons/back.svg';

const AlbumView = ({ content }) => {
  const [openIndex, setopenIndex] = useState(undefined);

  const closeModal = () => {
    setopenIndex(-1);
  };

  const nextImage = () => {
    let openIndexes = (openIndex + 1) % content.items.length;
    setopenIndex(openIndexes);
  };

  return (
    <Container className="view-wrapper">
      <article id="content">
        <header>
          <h1 className="documentFirstHeading">{content.title}</h1>
          {content.description && (
            <p className="documentDescription">{content.description}</p>
          )}
        </header>
        <section id="content-core">
          <Grid doubling stackable columns={4}>
            {content.items &&
              content.items.map((item, index) => (
                <Fragment key={item.url}>
                  {item.image_field && (
                    <Modal
                      className="gallery"
                      onClose={closeModal}
                      open={openIndex === index}
                      trigger={
                        <Grid.Column>
                          <Segment className="imageborder">
                            <PreviewImage
                              item={item}
                              alt={
                                item.image_caption
                                  ? item.image_caption
                                  : item.title
                              }
                              onClick={() => {
                                setopenIndex(index);
                              }}
                              className="ui middle aligned image"
                            />
                          </Segment>
                        </Grid.Column>
                      }
                      closeIcon
                    >
                      <Modal.Header>
                        <Grid>
                          <Grid.Row>
                            <GridColumn width={10}>{item.title}</GridColumn>
                            <GridColumn width={2} textAlign="right">
                              <UniversalLink
                                href={item.url}
                                title={item['@type']}
                                onClick={closeModal}
                              >
                                <Icon size="30px" fitted name={openSVG} />
                              </UniversalLink>
                            </GridColumn>
                          </Grid.Row>
                        </Grid>
                      </Modal.Header>
                      <Grid centered verticalAlign="middle">
                        <Grid.Row>
                          <Grid.Column width={2} textAlign="center">
                            <Button
                              className="gallery noborder"
                              onClick={nextImage}
                              style={{ margin: 0 }}
                            >
                              <Icon
                                name={backSVG}
                                className="circled"
                                size="30px"
                                style={{ margin: 0 }}
                              />
                            </Button>
                          </Grid.Column>
                          <Grid.Column width={8}>
                            <Modal.Content image>
                              <PreviewImage
                                item={item}
                                alt={
                                  item.image_caption
                                    ? item.image_caption
                                    : item.title
                                }
                                onClick={() => {
                                  setopenIndex(index);
                                }}
                                size="large"
                                className="ui image"
                              />

                              <Modal.Description>
                                <p>{item.description}</p>
                              </Modal.Description>
                            </Modal.Content>
                          </Grid.Column>
                          <Grid.Column width={2} textAlign="center">
                            <Button
                              onClick={nextImage}
                              className="gallery noborder"
                              style={{ margin: 0 }}
                            >
                              <Icon
                                name={aheadSVG}
                                className="circled"
                                size="30px"
                                style={{ margin: 0 }}
                              />
                            </Button>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Modal>
                  )}
                </Fragment>
              ))}
          </Grid>
        </section>
      </article>
    </Container>
  );
};

AlbumView.propTypes = {
  /**
   * Content of the object
   */
  content: PropTypes.shape({
    /**
     * Title of the object
     */
    title: PropTypes.string,
    /**
     * Description of the object
     */
    description: PropTypes.string,
    /**
     * Child items of the object
     */
    items: PropTypes.arrayOf(
      PropTypes.shape({
        /**
         * Title of the item
         */
        title: PropTypes.string,
        /**
         * Description of the item
         */
        description: PropTypes.string,
        /**
         * Url of the item
         */
        url: PropTypes.string,
        /**
         * Image of the item
         */
        image: PropTypes.object,
        /**
         * Image caption of the item
         */
        image_caption: PropTypes.string,
        /**
         * Type of the item
         */
        '@type': PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default AlbumView;
