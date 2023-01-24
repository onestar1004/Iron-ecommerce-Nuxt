<template lang="pug">
.odrQnPage.wrapper
  section.pageHead
    .container
      .secTop
        h3.pageTitle.txtCenter(style="text-transform: uppercase;") {{activeTab}} 
  section.ordersSec
    .container
      .ordersTab
        .tabLinks.flexBox
          button.tabLink(@click="activeTab = 'Orders'" :class="{'on': activeTab == 'Orders'}") ORDERS
          //- button.tabLink(@click="activeTab = 'Returns'" :class="{'on': activeTab == 'Returns'}") RETURNS
          //- button.tabLink(@click="activeTab = 'Messages'" :class="{'on': activeTab == 'Messages'}") MESSAGES (0)
          button.tabLink(@click="activeTab = 'Addresses'" :class="{'on': activeTab == 'Addresses'}") ADDRESSES
          button.tabLink(@click="activeTab = 'Saved'" :class="{'on': activeTab == 'Saved'}") SAVED DESIGNS
          button.tabLink(@click="activeTab = 'Recent'" :class="{'on': activeTab == 'Recent'}") RECENTLY VIEWED
          button.tabLink(@click="activeTab = 'Settings'" :class="{'on': activeTab == 'Settings'}") ACCOUNT SETTINGS
        .tabContent
          Orders(v-if="activeTab == 'Orders'")
          Returns(v-if="activeTab == 'Returns'")
          Messages(v-if="activeTab == 'Messages'")
          Addresses(v-if="activeTab == 'Addresses'")
          SavedDesigns(v-if="activeTab == 'Saved'")
          RecentlyViewed(v-if="activeTab == 'Recent'")
          AccountSettings(v-if="activeTab == 'Settings'")

  section.breadcrumbBox
    .container
      ul.breadcrumb.flexBox.flexJcc.flexAic.noList
        li.bcItem
          a(href='#') Home
        li.bcItem
          a(href='#') Your Account
        li.bcItem.active Orders


  Footer
</template>

<script setup>
let activeTab = $ref('Orders');
</script>