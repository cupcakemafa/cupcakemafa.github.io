<tag-cloud>
<div class='panel panel-default'>
    <div class='panel-heading'>
        <h3>Tags</h3>
    </div>
    <div id='tagList' class='panel-body widget-content cloud-label-widget-content text-left'>
        <p class='text-muted'>
            <img 
                src='https://4.bp.blogspot.com/-z4lxPcAEEkM/VnSzoFWF16I/AAAAAAAABWI/hqkxJReGUDg2dq5tnzdSfvYyE-cALr7lA/s120/01.png'
                srcset='
                    https://4.bp.blogspot.com/-z4lxPcAEEkM/VnSzoFWF16I/AAAAAAAABWI/hqkxJReGUDg2dq5tnzdSfvYyE-cALr7lA/s120/01.png 1x,
                    https://4.bp.blogspot.com/-z4lxPcAEEkM/VnSzoFWF16I/AAAAAAAABWI/hqkxJReGUDg2dq5tnzdSfvYyE-cALr7lA/s240/01.png 2x,
                    https://4.bp.blogspot.com/-z4lxPcAEEkM/VnSzoFWF16I/AAAAAAAABWI/hqkxJReGUDg2dq5tnzdSfvYyE-cALr7lA/s360/01.png 3x'
                class='team-icon img-responsive' alt='ながれで！' />
        </p>
        <span each={ tag_cloud_data } class='label-size label-size-{ cssSize }'>
            <span dir='{ langageDirection }'>
                <a href='{ href }'>{ tag } ({ count })</a>
            </span>
        </span>
    </div>
    <!-- // panel-body widget-content cloud-label-widget-content -->
</div>
<script>
    this.tag_cloud_data = tag_cloud_data
</script>
</tag-cloud>