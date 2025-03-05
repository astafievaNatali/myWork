<template>
    <div class="comment_item">
        <div class="comment_name">
            {{comment.name}}
        </div>
        <div class="comment_email">
            <a :href="`mailto:${comment.email}`" class="comment_link">{{comment.email}}</a>
        </div>
        <div class="comment_body">
            {{comment.body}}
        </div>
    </div>
</template>
<script>
export default {
    props: ['comment']
}
</script>