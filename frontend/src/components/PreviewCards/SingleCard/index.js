/** @jsxImportSource theme-ui */
import { Flex, Image, Text, Box } from 'theme-ui';
import { CircleWavyCheck } from 'phosphor-react';
import Headline from '../../Headline';
import { Link } from "react-router-dom";

const CardHref = (props) => (<Link to={`/reviews/${props.projectHref}`} state={{projectName: props.projectName, background: props.background, primary: props.primary, creatorName: props.creatorName, openseaLink: props.openseaLink, projectHref: props.projectHref, contractAddress: props.contractAddress}} {...props} sx={{ textDecoration: 'none', color: 'inherit' }}>{props.children}</Link>)

const CardLayout = (props) => (<Flex {...props} sx={{ maxWidth: '100%', width: '100%', height: '400px', borderRadius: '40px', flexDirection: 'column', pb: '30px', overflow: 'hidden', backgroundColor: 'navy40' }}>{props.children}</Flex>)

const CardBackground = ({background, ...props}) => (<Image src={background} sx={{ minHeight: '240px', width: '100%', objectFit: 'cover', borderRadius: '40px' }} />)

const PrimaryImage = ({primary, ...props}) => (<Flex sx={{alignSelf: 'center', position: 'relative', mt: '-65px', backgroundColor: '#0508104D', borderRadius: '50%', padding: '6px'}}><Image src={primary} sx={{ maxWidth: '110px', maxHeight: '110px', objectFit: 'cover', borderRadius: '50%' }} /></Flex>)

const TextContainer = (props) => (<Flex {...props} sx={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', pt: '10px' }}>{props.children}</Flex>)

const PreviewCards = ({ projectName, background, primary, creatorName, creatorLink, projectHref, contractAddress, openseaLink }) => {
    return (
        <CardHref projectHref={projectHref} projectName={projectName} background={background} primary={primary} creatorName={creatorName} contractAddress={contractAddress} openseaLink={openseaLink}>
            <CardLayout>
                <CardBackground background={background}/>
                <PrimaryImage primary={primary} />
                <TextContainer>
                    <Headline sx={{ pb: '10px', textAlign: 'center', fontSize: [3,2,3], fontWeight: '600' }}>{projectName}</Headline>
                    <Flex sx={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text sx={{ color: 'navy0', pr: '2px', fontSize: [2,1,2], fontWeight: '600' }}>by {creatorName}</Text>
                        <CircleWavyCheck size={20} sx={{ color: 'navy0' }} />
                    </Flex>
                </TextContainer>
            </CardLayout>
        </CardHref>
    )
}

export default PreviewCards