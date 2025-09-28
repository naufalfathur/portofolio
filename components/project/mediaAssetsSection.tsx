import React from 'react'
import Image from 'next/image'
import { Asset } from '@/types';
import { motion } from 'framer-motion';

interface mediaAssetsSectionProps {
    themeColor: string,
    assetQty: number,
    otherSectionImg: Asset[]
}


function MediaAssetsSection({ themeColor, assetQty, otherSectionImg }: mediaAssetsSectionProps) {
    const bgStyle = {
        backgroundColor: themeColor ? `#${themeColor}` : '#ccc',
    };

    return (
        <div className="w-full h-full">
            {assetQty === 1 ? (
                <div className="layoutA h-full flex flex-col space-y-4 rounded-3xl overflow-clip" style={bgStyle}>
                    {otherSectionImg[0] && otherSectionImg[0].fields.file.contentType == "application/pdf" ? (
                        <div>
                            <iframe
                                src={otherSectionImg ? ('https:' + otherSectionImg[0].fields.file.url) : '/logo.png'}
                                className="w-full h-[80vh] border"
                                title="MediaAsset PDF"
                            />
                        </div>
                    ) : (
                        <motion.div
                            className="relative w-full h-full overflow-hidden rounded-3xl"
                            whileHover={{ scale: 1.05 }}
                            initial={{ scale: 1 }}
                            transition={{
                                duration: 0.8,
                                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                            }}
                            style={{ transformOrigin: "center center", willChange: "transform" }}
                        >
                            <Image
                                alt=''
                                src={otherSectionImg[0] ? ('https:' + otherSectionImg[0].fields.file.url) : '/logo.png'}
                                width={otherSectionImg[0] ? otherSectionImg[0].fields.file.details.image?.width : 400}
                                height={0}
                                quality={100}
                                className='w-full h-full object-cover'
                            />
                        </motion.div>
                    )}
                </div>
            ) : (
                <div className="layoutB h-full flex flex-col space-y-4">
                    <div className="grid grid-cols-9 gap-4 w-full h-full">
                        <div className="col-span-4 rounded-3xl overflow-clip" style={bgStyle}>
                            <motion.div
                                className="relative w-full h-full overflow-hidden rounded-3xl"
                                whileHover={{ scale: 1.05 }}
                                initial={{ scale: 1 }}
                                transition={{
                                    duration: 0.8,
                                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.8 },
                                }}
                                style={{ transformOrigin: "center center", willChange: "transform" }}
                            >
                                <Image
                                    alt=''
                                    src={otherSectionImg ? ('https:' + otherSectionImg[0].fields.file.url) : '/logo.png'}
                                    width={otherSectionImg ? otherSectionImg[0].fields.file.details.image?.width : 400}
                                    height={0}
                                    quality={100}
                                    className='w-full h-full object-cover'
                                />
                            </motion.div>
                        </div>
                        <div className="col-span-5 rounded-3xl overflow-clip" style={bgStyle}>
                            <motion.div
                                className="relative w-full h-full overflow-hidden rounded-3xl"
                                whileHover={{ scale: 1.05 }}
                                initial={{ scale: 1 }}
                                transition={{
                                    duration: 0.8,
                                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                                }}
                                style={{ transformOrigin: "center center", willChange: "transform" }}>
                                <Image
                                    alt=''
                                    src={otherSectionImg ? ('https:' + otherSectionImg[1].fields.file.url) : '/logo.png'}
                                    width={otherSectionImg ? otherSectionImg[1].fields.file.details.image?.width : 400}
                                    height={0}
                                    quality={100}
                                    className='w-full h-full object-cover'
                                />
                            </motion.div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 gap-4 w-full h-full">
                        <div className="col-span-3 rounded-3xl overflow-clip" style={bgStyle}>
                            <motion.div
                                className="relative w-full h-full overflow-hidden rounded-3xl"
                                whileHover={{ scale: 1.05 }}
                                initial={{ scale: 1 }}
                                transition={{
                                    duration: 0.8,
                                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                                }}
                                style={{ transformOrigin: "center center", willChange: "transform" }}
                            >
                                <Image
                                    alt=''
                                    src={otherSectionImg ? ('https:' + otherSectionImg[2].fields.file.url) : '/logo.png'}
                                    width={otherSectionImg ? otherSectionImg[2].fields.file.details.image?.width : 400}
                                    height={0}
                                    quality={100}
                                    className='w-full h-full object-cover'
                                />
                            </motion.div>
                        </div>
                        <div className="col-span-2 rounded-3xl overflow-clip" style={bgStyle}>
                            <motion.div
                                initial={{ y: 10 }}
                                whileHover={{ y: 0 }}
                                transition={{
                                    type: "spring",
                                    bounce: 0.4,
                                    duration: 0.8,
                                }}
                                style={{ transformOrigin: "center center", willChange: "transform" }}
                            >
                                <Image
                                    alt=''
                                    src={otherSectionImg ? ('https:' + otherSectionImg[3].fields.file.url) : '/logo.png'}
                                    width={otherSectionImg ? otherSectionImg[3].fields.file.details.image?.width : 400}
                                    height={0}
                                    quality={100}
                                    className='w-full h-full object-cover'
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MediaAssetsSection