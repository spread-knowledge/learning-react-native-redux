import React, { Component } from 'react'
import { TabBarIOS, Text, View } from 'react-native'
import { connect } from 'react-redux'
import styles from '../styles/TabBar'
import TabBarItem from './TabBarItem'

const base64FeedIcon = 'data:image/png;base64,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';
const base64SpaceIcon = 'data:image/png;base64,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';
const base64FavoriteIcon = 'data:image/png;base64,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';

class TabBar extends React.Component {
  render() {
    return (
      <TabBarIOS
        unselectedTintColor='gray'
        tintColor='#009999'
        barTintColor='white'>

        <TabBarItem
          type='feed'
          title='Feed'
          icon={ base64FeedIcon }
        />

        <TabBarItem
          type='spaces'
          title='Spaces'
          icon={ base64SpaceIcon }
        />

        <TabBarItem
          type='favorites'
          title='Favorites'
          icon={ base64FavoriteIcon }
        />

      </TabBarIOS>
    )
  }
}

TabBar = connect()(TabBar)

export default TabBar