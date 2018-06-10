import React from 'react';
import './Profile.css'

const Profile = ({ user }) => {
let DOBdate = new Date(user.DOB)
    return(
        <div class="pa3 pa5-ns">
            <h4 class="f6 fw6">Profile</h4>
            <dl class="f6 lh-title mv2">
                <dt class="dib b">firstName: </dt>
                <dd class="dib ml0 gray">{user.firstName}</dd>
            </dl>
            <dl class="f6 lh-title mv2">
                <dt class="dib b">lastName: </dt>
                <dd class="dib ml0 gray">{user.lastName}</dd>
            </dl>
            <dl class="f6 lh-title mv2">
                <dt class="dib b">email: </dt>
                <dd class="dib ml0 gray">{user.email}</dd>
            </dl>
            <dl class="f6 lh-title mv2">
                <dt class="dib b">userType: </dt>
                <dd class="dib ml0 gray">{user.userType}</dd>
            </dl>
            <dl class="f6 lh-title mv2">
                <dt class="dib b">DOB: </dt>
                <dd class="dib ml0 gray">{DOBdate.toGMTString()}</dd>
            </dl>
            <dl class="f6 lh-title mv2">
                <dt class="dib b">loginWith: </dt>
                <dd class="dib ml0 gray">{user.loginWith}</dd>
            </dl>
            <dl class="f6 lh-title mv2">
                <dt class="dib b">facebookId: </dt>
                <dd class="dib ml0 gray">{user.facebookId}</dd>
            </dl>
            <dl class="f6 lh-title mv2">
                <dt class="dib b">twitterId: </dt>
                <dd class="dib ml0 gray">{user.twitterId}</dd>
            </dl>
            <dl class="f6 lh-title mv2">
                <dt class="dib b">about: </dt>
                <dd class="dib ml0 gray">{user.about}</dd>
            </dl>
            <dl class="f6 lh-title mv2">
                <dt class="dib b">receiveCoupon: </dt>
                <dd class="dib ml0 gray">{user.receiveCoupon}</dd>
            </dl>
            <dl class="f6 lh-title mv2">
                <dt class="dib b">created: </dt>
                <dd class="dib ml0 gray">{user.created}</dd>
            </dl>
            <dl class="f6 lh-title mv2">
                <dt class="dib b">modified: </dt>
                <dd class="dib ml0 gray">{user.modified}</dd>
            </dl>
            <dl class="f6 lh-title mv2">
                <dt class="dib b">status: </dt>
                <dd class="dib ml0 gray">{user.status}</dd>
            </dl>
           
        </div>

    )
}

export default Profile;